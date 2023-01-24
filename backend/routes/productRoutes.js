import  express from 'express'
import { getProducts,getProductsById } from '../controllers/productController.js'
// @desc Fetch all products
// @route GET /api/products
// @access Public
const router=express.Router()

router.route('/').get(getProducts)
// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.route('/:id').get(getProductsById)

export default router