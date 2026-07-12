/* Router function from express, not whole express object */
import { Router } from "express";

/* Routes file connects URL's to controller functions. */
import { homePage } from "../controllers/pageController.js";
import { servicesPage } from "../controllers/pageController.js";
// servicesPages mega menu
import { fleetPage } from "../controllers/pageController.js";
// fleet mega menu
import { caseStudiesPage } from "../controllers/pageController.js";
// caseStudies mega menu

/* Create new router object */
const router = Router();

/* 
Router = collection of routes. 
Route = one HTTP method + URL path + controller function. 

i.e. GET method should run homePage controller for / URl path 
*/

router.get("/", homePage);
router.get("/services", servicesPage);
router.get("/fleet", fleetPage);
router.get("/case-studies", caseStudiesPage);
// router.get("/about", aboutPage);
// router.get("/contact", contactPage);

export default router;
