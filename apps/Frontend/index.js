/* Full express import -> express can create actual app. */
/* This is for EJS frontend, EJS needs a server to render it (server side rendering). */
import express from "express";

/* Node's built in path module for safely joining up file paths. */
import path from "path";

/* Convert import.meta.url (full FILE url) into normal file path */
import { fileURLToPath } from "url";

/* Import page routes so main app can use them. */
import pageRoutes from "./routes/pageRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes.js";

/* Create Express app. */
const app = express();

/* Port number for local server */
const PORT = 3000;

/* Get FILE NAME of current file. With ES modules, Node gives me import.meta.url 
(a file URL). 'fileURLToPath' converts it into normal FILE path. */
const __filename = fileURLToPath(import.meta.url);

/* Get the FOLDER path only from the current full FILE file path */
const __dirname = path.dirname(__filename);

/* Set EJS as template / view engine */
app.set("view engine", "ejs");

/* Join current folder path to the views folder for rendering views. */
app.set("views", path.join(__dirname, "views"));

/* Let browser access static files in public + assets folder */
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

/* Express read form + json data */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Connect pageRoutes to the app */
app.use("/", pageRoutes);
// app.use("/auth", authRoutes);
// app.use("/dashboard", dashboardRoutes);

/* Start server -> listen for requests */
app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
