/* Need router function from express, not whole object */
import { Router } from "express";

/* this file decides which controller function belongs to which URL. So needs 
to know about your controller functions -> hence why homePage is imported from pageController.js. */
/* route file needs to connect URL's to controller functions. */
import { homePage } from "../controllers/pageController.js";

/* Router(); creates a new router object */
const router = Router();

/* Router = collection of routes. Route = one method, one URL rule. Which URL was requested by client, 
what function should handle it. i.e. GET method should run homePage controller */

router.get("/", homePage);
// router.get("/about", aboutPage);
// router.get("/services", servicesPage);
// router.get("/contact", contactPage);

export default router;
