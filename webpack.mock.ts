// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Application } from "express";
import { categories } from "./server/data/categories";
import { products } from "./server/data/products";
import IProduct from "@/types/iProduct";

export default webpackMockServer.add((app: Application) => {
  app.get("/api/categories", (_req, res) => {
    res.json(Object.values(categories));
  });

  app.get("/api/products", (_req, res) => {
    let productsList = [...products];

    if (_req.query.sortBy) {
      productsList = productsList.sort((a, b) => {
        const sortBy = ((_req.query.sortBy as string) in a ? _req.query.sortBy : "date") as keyof IProduct;

        const fieldA = a[sortBy];
        const fieldB = b[sortBy];

        return fieldA > fieldB ? -1 : 1;
      });
    }

    if (_req.query.amount) {
      const { amount } = _req.query;

      if (+amount) {
        productsList = productsList.length > +amount ? productsList.slice(0, +amount) : productsList;
      }
    }

    if (_req.query.filter) {
      const { filter: searchString } = _req.query;

      productsList = productsList.filter((product) =>
        product.name.toLowerCase().includes((searchString as string).trim().toLowerCase())
      );
    }

    if (_req.query.category) {
      const { category: categoryName } = _req.query;
      const category = `${categoryName}` in categories ? categories[`${categoryName}`] : null;

      if (category) {
        productsList = productsList.filter((product) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const id of product.categoriesId) {
            if (id === category.id) {
              return true;
            }
          }
          return false;
        });
      }
    }

    res.json(productsList);
  });
});
