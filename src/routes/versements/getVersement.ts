import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";
import Link from "../links/Link";
import * as linkStringify from "../links/linkStringify";

export function process(req: Request, res: Response, next: NextFunction) {
    
  let id = parseInt(req.params.id);

  let versement: Versement = mockDb.read(id);

  let links: Link[] = [];
  if("brouillon" === versement.etat) {
    links.push(new Link(req.baseUrl + "/versements/{id}", true, "update", "PATCH"));
    links.push(new Link(req.baseUrl + "/versements/{id}", true, "delete", "DELETE"));
    links.push(new Link(req.baseUrl + "/versements/{id}/validation", true, "validate", "PUT"));
  }

  let retour = {
    "versement": {
      "id": versement.id,
      "etat": versement.etat,
      "client": versement.client,
      "montant": versement.montant,
      "commentaire": versement.commentaire,
      "links": JSON.stringify(links, linkStringify.replacer)
    }
  };

  res.set("Content-Type", "application/json");
  res.json(retour);
}
