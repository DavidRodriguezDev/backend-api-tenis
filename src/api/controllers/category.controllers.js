const Category = require("../models/category.models");

const getAllCategories = async (request, response) => {
    try {
        
        const allCategories = await Category.find().populate("tournaments"); 
        return response.status(200).json(allCategories);

    } catch (error) {
        return response.status(500).json(error);
    }
}

const getCategory = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allCategories = await Category.findById(id).populate("tournaments"); 
        return response.status(200).json(allCategories);

    } catch (error) {
        response.status(500).json(error)
    }
}

const postNewCategory = async (request, response) => {
    try {
        
       const {category, points, atpLogo, tournaments} = request.body;
       const newCategory = new Category({category, points, atpLogo, tournaments});

       if(request.file) {
        
        newCategory.atpLogo = request.file.path;

       }

       const createdCategory = await newCategory.save(); 
       return response.status(201).json(createdCategory);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const putCategory = async (request, response) => {
    try {
        
        const {id} = request.params;
        const putCategory = new Category(request.body);
        putCategory._id = id;

        if(request.file) {
        
            putCategory.atpLogo = request.file.path;
    
           }

        const categoryDb = await Category.findByIdAndUpdate(id, putCategory);

        if(!categoryDb){
            return response.status(404).json("message: Category not found")
        }

        return response.status(200).json(putCategory);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const deleteCategory = async (request, response) => {
    try {

        const {id} = request.params;
        const categoryDb = await Category.findByIdAndDelete(id);

        if(!categoryDb) {
            return response(404).json({"message" : "Category not found"})
        }

        return response.status(200).json(categoryDb);

    } catch (error) {
       return response.status(500).json(error);
    }
}

module.exports = {getAllCategories, getCategory, postNewCategory, putCategory, deleteCategory};