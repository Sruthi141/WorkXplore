import express from "express";
import {isAuthenticated} from "../middlewares/authentication.js ";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companyController.js";
import { singleupload } from "../middlewares/multer.js";


const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleupload, updateCompany);

export default router;