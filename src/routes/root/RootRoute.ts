import { Router, Request, Response, NextFunction } from "express";
import * as path from "path";
import * as linkStringify from "../links/linkStringify";
import Link from "../links/Link";

const packageJson = require(path.join(__dirname, "../../../package.json"));

export default class VersementsRoute {
  router: Router;
  path: string;

  constructor() {
    this.router = Router();
    this.router.get("/", function(req, res, next) {
      let retour = {
        "version": "1.0",
        "links": [
          JSON.stringify(
            new Link(req.baseUrl + "/versements", false, "list", "GET"),
            linkStringify.replacer
          ),
          JSON.stringify(
            new Link(req.baseUrl + "/versements{/id}", true, "get-by-id", "GET"),
            linkStringify.replacer
          ),
          JSON.stringify(
            new Link(req.baseUrl + "/versements", false, "create", "POST"),
            linkStringify.replacer
          )
        ]
      };

      res.set("Content-Type", "application/json");
      res.json(retour);
    });
  }
}
