/* only need to import router function from express because don't need whole express object in this file */
import { Router } from "express";
import { homePage } from "../controllers/pageController.js";

const router = Router();

router.get("/", homePage);
// router.get("/about", aboutPage);
// router.get("/services", servicesPage);
// router.get("/contact", contactPage);

export default router;
