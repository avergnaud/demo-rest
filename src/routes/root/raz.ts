import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let id = parseInt(req.params.id);

  mockDb.tmpraz();

  let retour = {
    "tout est suppr": "ok"
  };
  // retour["versement"] = JSON.stringify(versement);

  res.set("Content-Type", "application/json");
  res.json(retour);
}
