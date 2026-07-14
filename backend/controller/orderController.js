{/*const Order = require('../model/Order');
const sendEmail = require('../utils/sendEmail');
//Create a new order
const createOrder = async (req, res) => {
    try {
        const { items, totalAmount, address, paymentId } = req.body;
        if (!items || items.length === 0 || !totalAmount || !address || !paymentId) {
            return res.status(400).json({ message: 'Invalid order data' });
        }
        else {
            const order = new Order({
                user: req.user._id,
                items,
                totalAmount,
                address,
                paymentId
            });
            await order.save();
            const message = `Dear ${req.user.name},\n\nThank you for your order! Your order has been successfully created with the following details:\n\nOrder ID: ${order._id}\nTotal Amount: $${totalAmount}\nShipping Address:\n${address.fullName}, ${address.street}, ${address.city}, ${address.postalCode}, ${address.country}\n\nWe will notify you once your order is shipped.\n\nBest regards,\nShopNest Team`;
            await sendEmail(req.user.email, 'Order Created', message);
            res.status(201).json({
                message: 'Order created successfully.',
                order
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error creating order',
            error
        });
    }
};
const myOrders = async(req,res)=>{
    try{
        const orders = await Order.find({user:req.user._id}).populate('items.productId','name price');
    }catch(error){
        res.status(500).json({message:'Error fetching orders',error});
    }
};
const getOrders = async(req,res)=>{
    try{
        const orders = await Order.find({}).populate('userId','id name')
        //.populate('items.productId','name price');
        res.json(orders);
    }catch(error){
        res.status(500).json({message:'Error fetching orders',error});
    }
};
const updateOrderStatus = async(req,res)=>{
    try{
        const{status} =req.body;
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = status;
            await order.save();
            res.json({message:'Order status updated',order});
        }
        else{
            res.status(404).json({message:'Order not found'});
        }
    }catch(error){
        res.status(500).json({message:'Error updating order status',order});
    }
}
module.exports = { 
    createOrder,
    myOrders,
     getOrders,
     updateOrderStatus,

     };*/}
   {/*  const Order = require('../model/Order');
const sendEmail = require('../utils/sendEmail');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { items, totalAmount, address, paymentId } = req.body;

        if (!items || items.length === 0 || !totalAmount || !address || !paymentId) {
            return res.status(400).json({
                message: 'Invalid order data'
            });
        }

        const order = new Order({
            user: req.user._id,
            items,
            totalAmount,
            address,
            paymentId
        });

        await order.save();

        const message = `Dear ${req.user.name},

Thank you for your order!

Your order has been successfully created.

Order ID: ${order._id}
Total Amount: $${totalAmount}

Shipping Address:
${address.fullName},
${address.street},
${address.city},
${address.postalCode},
${address.country}

We will notify you once your order is shipped.

Best Regards,
ShopNest Team`;

        await sendEmail(req.user.email, 'Order Created', message);

        res.status(201).json({
            message: 'Order created successfully',
            order
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error creating order',
            error: error.message
        });
    }
};

// Get logged-in user's orders
const myOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate('items.productId', 'name price');

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Get all orders (Admin)
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate('user', 'name email')
            .populate('items.productId', 'name price');

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Update order status (Admin)
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        order.status = status;
        await order.save();

        res.json({
            message: 'Order status updated successfully',
            order
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error updating order status',
            error: error.message
        });
    }
};

module.exports = {
    createOrder,
    myOrders,
    getOrders,
    updateOrderStatus
};*/}
const Order = require('../model/Order');
const sendEmail = require('../utils/sendEmail');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { items, totalAmount, address, paymentId } = req.body;

        if (!items || items.length === 0 || !totalAmount || !address || !paymentId) {
            return res.status(400).json({
                message: 'Invalid order data'
            });
        }

        const order = new Order({
            user: req.user._id,
            items,
            totalAmount,
            address,
            paymentId
        });

        await order.save();

        const message = `Dear ${req.user.name},

Thank you for your order!

Your order has been successfully created.

Order ID: ${order._id}
Total Amount: $${totalAmount}

Shipping Address:
${address.fullName},
${address.street},
${address.city},
${address.postalCode},
${address.country}

We will notify you once your order is shipped.

Best Regards,
ShopNest Team`;

        await sendEmail(req.user.email, 'Order Created', message);

        res.status(201).json({
            message: 'Order created successfully',
            order
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error creating order',
            error: error.message
        });
    }
};

// Get logged-in user's orders
const myOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate('items.productId', 'name price');

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Get all orders (Admin)
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate('user', 'name email')
            .populate('items.productId', 'name price');

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email')
            .populate('items.productId', 'name price');

        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching order',
            error: error.message
        });
    }
};

// Update order status (Admin)
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        order.status = status;
        await order.save();

        res.json({
            message: 'Order status updated successfully',
            order
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error updating order status',
            error: error.message
        });
    }
};

module.exports = {
    createOrder,
    myOrders,
    getOrders,
    getOrderById,
    updateOrderStatus
};