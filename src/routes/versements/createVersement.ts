import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let newOne = new Versement(req.body);

  let created: Versement = mockDb.create(newOne);

  res.status(201);
  res.location('/api/Latest/versements/' + created.getId())
  res.set("Content-Type", "application/json");
  res.json(created);
}
