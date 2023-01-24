import  express from 'express'
import { authUser,registerUser,getUserProfile, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js' 
// @desc Fetch all products
// @route GET /api/products
// @access Public
const router=express.Router()

router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile')
      .get(protect,getUserProfile)
      .put(protect,updateUserProfile)


export default router