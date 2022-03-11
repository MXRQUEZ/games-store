// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Application } from "express";
import { v4 as getUniqueId } from "uuid";
import { categories } from "@/constants/categories";
import { products } from "./server/data/products";
import IProduct from "@/types/iProduct";
// eslint-disable-next-line import/no-named-as-default
import users from "./server/data/users";
import IUser from "@/types/iUser";
import { Ages, Genres, SortBy, Types } from "@/constants/searchFilters";
import Roles from "@/constants/roles";

export default webpackMockServer.add((app: Application) => {
  app.get("/api/products", (_req, res) => {
    let matchedProducts = [...products];

    if (_req.query.type && _req.query.sortBy) {
      const { type: typeQuery, sortBy } = _req.query;
      const sortQuery = (sortBy as string).toLocaleLowerCase();
      const type = typeQuery as string;
      const sortByDefault = SortBy.Date.toLocaleLowerCase();

      if (type === Types.Ascending) {
        matchedProducts = matchedProducts.sort((prevGame, nextGame) => {
          const sortKey = (sortQuery in prevGame ? sortQuery : sortByDefault) as keyof IProduct;
          return prevGame[sortKey] < nextGame[sortKey] ? -1 : 1;
        });
      } else {
        matchedProducts = matchedProducts.sort((prevGame, nextGame) => {
          const sortKey = (sortQuery in prevGame ? sortQuery : sortByDefault) as keyof IProduct;
          return nextGame[sortKey] < prevGame[sortKey] ? -1 : 1;
        });
      }
    }

    if (_req.query.amount) {
      const { amount } = _req.query;

      matchedProducts = matchedProducts.length > +amount ? matchedProducts.slice(0, +amount) : matchedProducts;
    }

    if (_req.query.filter) {
      const { filter } = _req.query;
      const searchString = filter as string;

      matchedProducts = matchedProducts.filter((product) =>
        product.name
          .toLowerCase()
          .replace(/[^\w]/gi, "")
          .includes(searchString.trim().replace(/[^\w]/gi, "").toLowerCase())
      );
    }

    if (_req.query.category) {
      const { category } = _req.query;
      const categoryName = category as string;
      const categoryFilter = categoryName in categories ? categories[categoryName] : null;

      matchedProducts = matchedProducts.filter((product) => {
        for (const id of product.categoriesId) {
          if (id === categoryFilter?.id) {
            return true;
          }
        }
        return false;
      });
    }

    if (_req.query.genre) {
      const { genre: genreQuery } = _req.query;
      const genre = genreQuery as string;
      if (genre in Genres && genre !== Genres.All) {
        matchedProducts = matchedProducts.filter((product) => product.genre === genre);
      }
    }

    if (_req.query.age) {
      const { age: ageQuery } = _req.query;
      const age = ageQuery as string;

      if (age in Ages && age !== Genres.All) {
        matchedProducts = matchedProducts.filter((product) => product.ageRating === age);
      }
    }

    res.json(matchedProducts);
  });

  app.get("/api/profile", (_req, res) => {
    const { user: userId } = _req.query;
    if (userId) {
      const searchedUser = users.find((user) => user.id === +userId) || null;
      res.json(searchedUser);
    }
  });

  app.post("/api/auth/sign-in", (_req, res) => {
    const { login, password } = JSON.parse(_req.body);

    if (login && password) {
      const userExists = users.find((user) => {
        if (user.login === login) {
          return user.password === password;
        }

        return false;
      });

      if (userExists) {
        res.json(userExists);
        return;
      }
    }

    res.json(null);
  });

  app.put("/api/auth/sign-up", (_req, res) => {
    const { login, password } = JSON.parse(_req.body);

    if (login && password) {
      const userExists = users.find((user) => {
        if (user.login === login) {
          return user.password === password;
        }

        return false;
      });

      if (userExists) {
        res.json(null);
        return;
      }

      const newUser: IUser = { login, password, id: getUniqueId(), balance: 0, role: Roles.User };
      users.push(newUser);
      res.json(newUser);
      return;
    }

    res.json(null);
  });

  app.post("/api/save-profile", (_req, res) => {
    const { id, username, description, profilePicture } = JSON.parse(_req.body);

    const currentUser = users.find((user) => user.id === id);

    if (currentUser && username) {
      currentUser.username = username;
    }

    if (currentUser && description) {
      currentUser.description = description;
    }

    if (currentUser && profilePicture) {
      currentUser.profilePicture = profilePicture;
    }

    res.json(currentUser);
  });

  app.post("/api/change-password", (_req, res) => {
    const { password, id } = _req.body;
    const currentUser = users.find((user) => user.id === id);

    if (currentUser?.password) {
      currentUser.password = password;
    }

    res.status(200).json({ message: "Password has been updated" });
  });

  app.post("/api/products", (_req, res) => {
    const { id, img, description, price, name, rating, genre, ageRating, categoriesId } = JSON.parse(
      _req.body
    ) as IProduct;
    const existingGame = products.find((product) => product.id === id);

    if (existingGame) {
      res.status(400).json(null);
      return;
    }

    products.push({
      id,
      img,
      description,
      price: +price,
      name,
      rating: +rating,
      genre,
      ageRating,
      date: new Date(),
      categoriesId,
    });
    res.send(_req.body);
  });

  app.put("/api/products", (_req, res) => {
    const { id, img, description, price, name, genre, ageRating, categoriesId } = JSON.parse(_req.body) as IProduct;

    const existingGameIndex = products.findIndex((product) => product.id === id);
    products[existingGameIndex] = {
      id: products[existingGameIndex].id,
      name,
      ageRating,
      price: +price,
      rating: products[existingGameIndex].rating,
      categoriesId,
      description,
      genre,
      img,
      date: products[existingGameIndex].date,
    };
    res.status(200).json({ message: "Game was updated" });
    res.json(products[existingGameIndex]);
  });

  app.delete("/api/products/:id", (_req, res) => {
    const { id } = _req.params;

    const removeProduct = products.find((product) => product.id === id);
    if (removeProduct) {
      const removeIndex = products.indexOf(removeProduct);
      products.splice(removeIndex, 1);
    }
    res.status(200).json({ message: "Game was deleted" });
  });
});
