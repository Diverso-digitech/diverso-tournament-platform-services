import express from "express";
import db from "./utils/db.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // support json encoded bodies
app.use(cookieParser());

app.use(authRoutes);
// quick checkup route
app.get("/", (req, res) => {
  res.send({ message: "App is running fine" });
});

const server = app.listen(process.env.PORT || 3000, function () {
  console.log(
    "API server started on http://localhost:" + server.address().port
  );
});
