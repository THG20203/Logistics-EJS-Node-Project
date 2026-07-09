/* need full express important because express creates actual app. */
import express from "express";

/* import Node's built in path module */
import path from "path";

/* fileURLToPath = for safe paths for pointing Express to views folder, public folder, assets folder. */
import { fileURLToPath } from "url";

/* import page routes so main app can use routes in routes files. */
import pageRoutes from "./routes/pageRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes.js";

/* create Express app -> app object -> attach settings, middleware, routes, server */
const app = express();

/* port number for local server to run on */
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Tell express use EJS as template / view engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

/* let Express read form data */
app.use(express.urlencoded({ extended: true }));

/* let Express use JSON data */
app.use(express.json());

/* connect pageRoutes file to the app */
app.use("/", pageRoutes);
// app.use("/auth", authRoutes);
// app.use("/dashboard", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
