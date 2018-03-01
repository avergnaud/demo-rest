import { Router, Request, Response, NextFunction } from "express";
import * as path from 'path';
import * as createVersement from './createVersement';
import * as viewAllVersements from './viewAllVersements';
import * as getVersement from './getVersement';
import * as patchVersement from './patchVersement';
import * as validateVersement from './validateVersement';
import * as deleteVersement from './deleteVersement';

const packageJson = require(path.join(__dirname, '../../../package.json'));

export default class VersementsRoute {
    router: Router;
    path: string;

    constructor() {
        this.router = Router();
        this.router.get("/", viewAllVersements.process);
        this.router.get("/:id", getVersement.process);

        /* les routes ci-dessous requièrent un Content-Type */
        this.router.all('/*', function(req, response, next) {
            let requestType = req.get('Content-Type');
            if("application/json".localeCompare(requestType) != 0) {
                response.status(501);
                response.json({
                    status: 501,
                    message: "Not Implemented. Expected Content-Type application/json"
                });
            } else {
                next();
            }
          });
        this.router.post("/",createVersement.process);
        this.router.patch("/:id",patchVersement.process);
        this.router.put("/:id/validate",validateVersement.process);
        this.router.delete("/:id",deleteVersement.process);
      }
    
}


