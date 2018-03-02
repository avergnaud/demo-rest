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

  let retour = {};
  if(!versement) {
    // id non trouvé
    res.status(404);
    retour = {
      "error": "not found: " + id
    };
  } else {
    // id existe
    if(req.body.client) {
      versement.client = req.body.client;
    }
    if(req.body.montant) {
      versement.montant = req.body.montant;
    }
    if(req.body.commentaire) {
      versement.commentaire = req.body.commentaire;
    }
    retour = {
      "patchedVersement": versement
    };
  }

  res.set("Content-Type", "application/json");
  res.json(retour);
}
