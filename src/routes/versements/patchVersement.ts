import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

/**
* PATCH
client, montant, commentaire
 */
export function process(req: Request, res: Response, next: NextFunction) {
    
  
  let id = parseInt(req.params.id);

  let versement: Versement = mockDb.read(id);

  console.log(req.body);

  if(req.body.client) {
    versement.client = req.body.client;
  }
  if(req.body.montant) {
    versement.montant = req.body.montant;
  }
  if(req.body.commentaire) {
    versement.commentaire = req.body.commentaire;
  }

  let retour = {
    "patchedVersement": versement
  };
  // retour["versement"] = JSON.stringify(versement);

  res.set("Content-Type", "application/json");
  res.json(retour);
}
