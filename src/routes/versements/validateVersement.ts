import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let id = parseInt(req.params.id);

  let versement: Versement = mockDb.read(id);

  versement.etat = "validé"

  let retour = {
    validatedVersement: versement
  };
  // retour["versement"] = JSON.stringify(versement);

  res.set("Content-Type", "application/json");
  res.json(retour);
}
