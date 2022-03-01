// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Application } from "express";
import { v4 as getUniqueId } from "uuid";
import { categories } from "./server/data/categories";
import { products } from "./server/data/products";
import IProduct from "@/types/iProduct";
// eslint-disable-next-line import/no-named-as-default
import users from "./server/data/users";
import IUser from "@/types/iUser";

export default webpackMockServer.add((app: Application) => {
  app.get("/api/categories", (_req, res) => {
    res.json(Object.values(categories));
  });

  app.get("/api/products", (_req, res) => {
    let matchedProducts = [...products];

    // const { type, criteria, genre, age, categories } = _req.query;
    const ascendingType = "ascending";
    if (_req.query.sortBy) {
      matchedProducts = matchedProducts.sort((a, b) => {
        const sortByDefault = "date";
        const sortQuery = _req.query.sortBy as string;
        const sortKey = (sortQuery in a ? sortQuery : sortByDefault) as keyof IProduct;

        const fieldA = a[sortKey];
        const fieldB = b[sortKey];

        return fieldA > fieldB ? -1 : 1;
      });
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

      if (category) {
        matchedProducts = matchedProducts.filter((product) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const id of product.categoriesId) {
            if (id === categoryFilter?.id) {
              return true;
            }
          }
          return false;
        });
      }
    }

    if (_req.query.genre) {
      const { genre } = _req.query;

      matchedProducts.filter((product) => product.genre === genre);
    }

    if (_req.query.age) {
      const { age } = _req.query;

      matchedProducts.filter((product) => product.ageRating >= +age);
    }

    if (_req.query.type && _req.query.criteria) {
      const { type, criteria: criteriaQuery } = _req.query;
      const criteria = criteriaQuery as keyof IProduct;

      if (type === ascendingType) {
        matchedProducts = matchedProducts.sort((prevGame, nextGame) =>
          prevGame[criteria] < nextGame[criteria] ? -1 : 1
        );
      } else {
        matchedProducts = matchedProducts.sort((prevGame, nextGame) =>
          nextGame[criteria] < prevGame[criteria] ? -1 : 1
        );
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

      const newUser: IUser = { login, password, id: getUniqueId() };
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
});
