const express = require("express");
const cds = require("@sap/cds");
const cors = require("cors");
const router = express.Router();

module.exports = async (o) => {
  try {
    let app = express();
    app.express = express;

    //Windows.limite
    app.use(express.json({ limit: "500kb" }));

    app.use(cors());
    app.use("/api", router);
    app.get("/", (req, res) => {
      res.end(`SAP CDS esta en ejecución.... ${req.url}`);
    });

    o.app = app;
    o.app.httpServer = await cds.server(o);
    return o.app.httpServer;
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }
};
