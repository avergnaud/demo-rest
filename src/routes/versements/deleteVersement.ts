import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let id = parseInt(req.params.id);

  let versement: Versement = mockDb.read(id);
  let retour = {};
  if(!versement) {
    // id non trouvé
    res.status(404);
    res.end();
  } else {
    // id existe
    versement.etat = "supprimé"
    res.set("Content-Type", "application/json");
    res.json(versement);
  }

}
