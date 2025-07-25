// Manage routes/paths to ProductController
import express from 'express';
import ProductController from './product.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';

const productRouter = express.Router();

const productController = new ProductController();

// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.post(
  '/rate',
  (req, res, next)=>{
    productController.rateProduct(req, res, next)
} 
);
productRouter.get(
  '/filter',
  (req, res)=>{
    productController.filterProducts(req, res)
} 
);
productRouter.get(
  '/',
  (req, res)=>{
    productController.getAllProducts(req, res)
} 
);
productRouter.post(
  '/',
  upload.single('imageUrl'),
  (req, res)=>{
    productController.addProduct(req, res)
} 
);

productRouter.get("/averagePrice",
   (req, res, next)=>{
  productController.averagePrice(req, res)
});

productRouter.get(
  '/:id',
  (req, res)=>{
    productController.getOneProduct(req, res)
} );




export default productRouter;
