import asyncHandler from 'express-async-handler';
import categoryService from '../services/categoryService.js';


const getCategories = asyncHandler(async (_req, res) => {
  const categories = await categoryService.getCategories();
  res.json(categories);
});


const getCategoryProducts = asyncHandler(async (req, res) => {
  const products = await categoryService.getCategoryProducts(req);
  res.json(products);
});


const get5Categories = asyncHandler(async (_req, res) => {
  const categories = await categoryService.getTop5Categories();
  res.json(categories);
});




export default {
  getCategories,
  getCategoryProducts,
  get5Categories,
};
