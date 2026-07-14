{/*const express = require("express");
const {protect} = require('../middleware/authMiddleware');
const {admin} = require('../middleware/adminMiddleware');
const{getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/productController')
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const router = express.Router();
//all products
router.route('/').get(getProducts).post(protect,admin,upload.single('image'),createProduct);
//specific product
router.route('/:id').get(protect,admin,upload.single('image'),getProductById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
module.exports = router;*/}
{/*const express = require("express");
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
// All Products
router.route('/')
    .get(getProducts)
    .post(protect, admin, upload.single('image'), createProduct);
// Specific Product
router.route('/:id')
    .get(getProductsById)
    .put(protect, admin, upload.single('image'), updateProduct)
    .delete(protect, admin, deleteProduct);
module.exports = router;*/}
const express = require("express");
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productController');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// ✅ All Products
router.route('/')
    .get(getProducts)
    .post(protect, admin, upload.single('image'), createProduct);

// ✅ Specific Product (NO multer needed here)
router.route('/:id')
    .get(getProductsById)
    .put(protect, admin, upload.single('image'), updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;