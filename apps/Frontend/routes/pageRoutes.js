/* Router function from express, not whole express object */
import { Router } from "express";

/* Routes file connects URL's to controller functions. */
import { homePage } from "../controllers/pageController.js";

/* Create new router object */
const router = Router();

/* 
Router = collection of routes. 
Route = one HTTP method + URL path + controller function. 

i.e. GET method should run homePage controller */

router.get("/", homePage);
// router.get("/about", aboutPage);
// router.get("/services", servicesPage);
// router.get("/contact", contactPage);

export default router;
