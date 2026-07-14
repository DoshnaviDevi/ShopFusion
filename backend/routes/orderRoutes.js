{/*const express = require('express');
const {protect} = require('../middleware/authMiddleware');
const {admin} = require('../middleware/adminMiddleware');
const{createOrder,getOrders,getOrderById,updateOrderStatus} = require('../controllers/orderControllers');
const router = express.Router();
router.route('/').post(protect,createOrder).get(protect,admin,getOrders);
router/route('/myorders').get(protect,myOrders);
router.route('/:id/status').get(protect,getOrderById).put(protect,admin,updateOrderStatus);
module.exports = router;*/}
{/*const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const {
   createOrder,
    myOrders,
    getOrders,
    updateOrderStatus
} = require('../controller/orderController');

const router = express.Router();

router.route('/')
    .post(protect, createOrder)
    .get(protect, admin, getOrders);

router.route('/myorders')
    .get(protect, myOrders);

router.route('/:id/status')
    .get(protect, getOrderById)
    .put(protect, admin, updateOrderStatus);

module.exports = router;
*/}
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const {
    createOrder,
    myOrders,
    getOrders,
    getOrderById,
    updateOrderStatus
} = require('../controller/orderController');

const router = express.Router();

// Create Order & Get All Orders (Admin)
router.route('/')
    .post(protect, createOrder)
    .get(protect, admin, getOrders);

// Get Logged-in User Orders
router.route('/myorders')
    .get(protect, myOrders);

// Get Order By ID
router.route('/:id')
    .get(protect, getOrderById);

// Update Order Status (Admin)
router.route('/:id/status')
    .put(protect, admin, updateOrderStatus);

module.exports = router;