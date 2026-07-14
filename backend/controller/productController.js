{/*const Product = require('../model/Product');
const cloudinary = require('../config/cloudinary');
const getProducts = async(req,res)=>{
    try{
 const products = await Product.find({});
 res.json(products);
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
const getProductsById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(product){
        res.json(product);
        }
    }catch(error){
        res.status(500).json({message:'server error'});
    }
};
const createProduct = async(req,res)=>{
    try{
    const{name,description,price,category,stock} = req.body;
    let imageUrl= '';
    if(req.file){
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);
        imageUrl = result.secure_url;
    }
    const product = new Product({
        name,
        description,
        price,
        category,
        stock,
        imageUrl
    });
    const saveProduct = await product.save();
    res.status(201).json(saveProduct);
}catch(error){
     res.status(500).json({message:'server error'});
}
};
const updateProduct = async(req,res)=>{
    try{
        const{name,description,price,category,stock} = req.body;
        const product = await Product.findById(req.params.id);
        if(product){
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || price.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            if(req.file){
                const result = await cloudinary.uploader.upload(req.file.path);
                console.log(result);
                product.imageUrl = result.secure_url;
            }
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        }
        else{
            res.status(404).json({message:'Product not found'});
        }
    }
    catch(error){
        res.status(500).json({message:'Server error'})
    }
};
const deleteProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        await product.remove();
        res.json({message:'Product removed'});
    }
    else{
        res.status(404).json({message:'Product not found'});
    }
}
    catch(error){
      res.status(500).json({message:'Server error'})
    }
};
module.exports = {
    getProducts,
    getProductsById,
    createProduct,
     updateProduct,
deleteProduct,

}*/}
{/*const Product = require('../model/Product');
const cloudinary = require('../config/cloudinary');
// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error',error:error.message });
    }
};
// Get Product By ID
const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' ,error:error.message});
    }
};
// Create Product
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error',error:error.message });
    }
};
// Update Product
const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                product.imageUrl = result.secure_url;
            }
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error',error:error.message });
    }
};
// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error',error:error.message });
    }
};
module.exports = {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};*/}
const Product = require('../model/Product');
const cloudinary = require('../config/cloudinary');

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get Product By ID
const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create Product
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        let imageUrl = '';

        // 🔥 SAFE CHECK (IMPORTANT)
        if (req.file) {
            if (!cloudinary || !cloudinary.uploader) {
                return res.status(500).json({
                    message: 'Cloudinary not initialized properly'
                });
            }

            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.stock = stock || product.stock;

        // image update
        if (req.file) {
            if (!cloudinary || !cloudinary.uploader) {
                return res.status(500).json({
                    message: 'Cloudinary not initialized properly'
                });
            }

            const result = await cloudinary.uploader.upload(req.file.path);
            product.imageUrl = result.secure_url;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.deleteOne();

        res.json({ message: 'Product removed' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};
