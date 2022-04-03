import express from "express";
import db from "./utils/db.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import regFormRoutes from "./routes/reg-form.js";
import schemaRoutes from "./routes/schema.js";
import configsRoutes from "./routes/configs.js";

const corsOptions = {
  origin: true,
  credentials: true,
};

const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json()); // support json encoded bodies

app.use(authRoutes);
app.use(regFormRoutes);
app.use(schemaRoutes);
app.use(configsRoutes);

// quick checkup route
app.get("/", (req, res) => {
  res.send({ message: "App is running fine" });
});

const server = app.listen(process.env.PORT || 5000, function () {
  console.log(
    "API server started on http://localhost:" + server.address().port
  );
});
