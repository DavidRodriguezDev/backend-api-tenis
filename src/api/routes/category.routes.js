const express = require("express");
const upload = require("../../middlewares/upload.files");

const categoryRouter = express.Router();

const {getAllCategories, getCategory, postNewCategory, putCategory, deleteCategory} = require("../controllers/category.controllers");

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/",upload.single("atpLogo"), postNewCategory);
categoryRouter.put("/:id",upload.single("atpLogo"), putCategory);
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;