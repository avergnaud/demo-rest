import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";
import Link from "../links/Link";
import * as linkStringify from "../links/linkStringify";

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
    let links: Link[] = [];
  
    links.push(new Link(req.baseUrl + "/versements/" + versement.id, false, "self", "GET"));
  
    if("brouillon" === versement.etat) {
      links.push(new Link(req.baseUrl + "/versements/" + versement.id, false, "update", "PATCH"));
      links.push(new Link(req.baseUrl + "/versements/" + versement.id, false, "delete", "DELETE"));
      links.push(new Link(req.baseUrl + "/versements/" + versement.id + "/validate", false, "validate", "PUT"));
    }
  
    //TODO : existe raccourci ?
    retour = {
        "id": versement.id,
        "etat": versement.etat,
        "client": versement.client,
        "montant": versement.montant,
        "commentaire": versement.commentaire,
        "links": links
    };
  }

  res.set("Content-Type", "application/json");
  res.json(retour);
}
