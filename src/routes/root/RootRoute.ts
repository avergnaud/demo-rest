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

      let links: Link[] = [];
      links.push(new Link(req.baseUrl + "/versements", false, "list", "GET"));
      links.push(new Link(req.baseUrl + "/versements{/id}", true, "get-by-id", "GET"));
      links.push(new Link(req.baseUrl + "/versements{/id}", true, "update", "PATCH"));
      links.push(new Link(req.baseUrl + "/versements/{id}/validate", true, "validate", "PUT"));
      links.push(new Link(req.baseUrl + "/versements{/id}", true, "delete", "DELETE"));
      links.push(new Link(req.baseUrl + "/versements", false, "create", "POST"));

      let retour = {
        "version": "1.0",
        "links": links
      };

      res.set("Content-Type", "application/json");
      res.json(retour);
    });
  }
}
