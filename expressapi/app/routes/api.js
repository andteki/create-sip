import Router from 'express'
const router = Router()

const AuthController = require('../controllers/authcontroller')
const UserController = require('../controllers/usercontroller')
const { verifyToken } = require('../middlewares/authjwt')
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
 
export default router
