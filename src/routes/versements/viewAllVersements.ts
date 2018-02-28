import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let newOne = new Versement(req.body);

  let versements: Versement[] = mockDb.readAll();

  let retour = {
    "versements": JSON.stringify(versements)
  };

  res.set("Content-Type", "application/json");
  res.json(retour);
}
