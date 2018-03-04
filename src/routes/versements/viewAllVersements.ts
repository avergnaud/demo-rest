import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";
import * as _ from "lodash";
import Link from "../links/Link";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let newOne = new Versement(req.body);

  let versements: Versement[] = mockDb.readAll();

  versements.forEach(versement => {
    _.assign(versement, versement, {links: [new Link(req.baseUrl + "/" + versement.id, false, "self", "GET")]});
  });

  res.set("Content-Type", "application/json");
  res.json(versements);
}
