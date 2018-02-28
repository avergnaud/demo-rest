import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import RootRoute from "./routes/root/RootRoute";
import VersementsRoute from "./routes/versements/VersementsRoute";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {

    let router = express.Router();

// SI ON A BESOIN D'APPELER CE SERVICE DEPUIS UN NAVIGATEUR EN CORS
const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:4200",/* ou autre, ici c'est le port par défaut angular */
  preflightContinue: false
};
//use cors middleware
router.use(cors(options));

this.express.use(cors(options));

// routes...
this.express.use("/api/latest/versements", new VersementsRoute().router);
this.express.use("/api/v1/versements", new VersementsRoute().router);
this.express.use("/api/latest", new RootRoute().router);
this.express.use("/api/v1", new RootRoute().router);

this.express.listen(3000);

  }

}

export default new App().express;
