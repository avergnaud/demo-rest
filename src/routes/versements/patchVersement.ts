import { Router, Request, Response, NextFunction } from "express";
import * as mockDb from "../../persistence/MockDb";
import Versement from "avergnaud-versement";

/**
 * on a utilisé POST pour créer un versement sur /api/versements
 * on aurait pu utliser PUT pour créer un versement sur /api/versements/123
 * mais on ne va utiliser PUT que pour mettre à jour
 */
export function process(req: Request, res: Response, next: NextFunction) {
    
//Une incompréhension des header Content-* de la part du serveur doit générer une erreur 501 (not implemented) car il n’a pas le droit de les ignorer. 

  //Si une entité avec la même URI que celle de la requête existe déjà, l’entité de la requête devrait la remplacer.
//Comme pour le PUT, le POST doit renvoyer le statut 200 si la réponse contient une entité, 204 si elle est vide.
  //le code retourné par le serveur en cas de succès doit être 200 (OK) ou 204 (No content). En effet, en pratique un PUT va très rarement générer une réponse avec un contenu.
//On doit fournir une entité complète dans le corps d’une requête PUT
  
  let id = parseInt(req.params.id);

  let versement: Versement = mockDb.read(id);

  // let retour = {
  //   description: "getVersement.process done"
  // };
  // retour["versement"] = JSON.stringify(versement);

  res.set("Content-Type", "application/json");
  // res.json(retour);
}
