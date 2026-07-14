{/*const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./model/User');
const Product = require('./model/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shopfusion.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 150.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89
      }
    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
{/*const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./model/User');      // CHECK THIS PATH
const Product = require('./model/Product'); // CHECK THIS PATH
const connectDB = require('./config/db');

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.create({
      name: 'Admin User',
      email: 'admin@shopfusion.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      }
    ];

    await Product.insertMany(products);

    console.log('✅ Data Imported Successfully!');
    process.exit();

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

importData();*/}
{/*const mongoose = require('mongoose');
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();
const connectDB = require('./config/db');
const User = require('./model/User');
const Product = require('./model/Product');
const bcrypt = require('bcryptjs');
const importData = async () => {
  try {
    await connectDB(); // now env is loaded properly

    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.create({
      name: 'Admin User',
      email: 'admin@shopfusion.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log("Seed done");
    process.exit();
  } catch (error) {
    console.log("❌ Error:", error.message);
    process.exit(1);
  }
};

importData();*/}
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');
const User = require('./model/User');
const Product = require('./model/Product');

dotenv.config();

const importData = async () => {
  try {
    // connect DB first
    await connectDB(process.env.MONGO_URI);

    // clear old data
    await User.deleteMany();
    await Product.deleteMany();

    // create admin password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.create({
      name: 'Admin User',
      email: 'admin@shopfusion.com',
      password: hashedPassword,
      role: 'admin'
    });

    // sample products
    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'Stylish and comfortable chair.',
        price: 150.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1',
        ratings: 4.2,
        numReviews: 12
      },{
        name:"Apple Watch Series 9",
        description:'Permium smartwatch with retina',
        price:42999,
        category:'Electronics',
        stock:20,
        imageUrl:'https://tse3.mm.bing.net/th/id/OIP.nD28TR_9c1ct21_X72pDQgHaHa?r=0&pid=Api&P=0&h=180',
        rating:4.8,
        numReviews:152,
      },
      {
  name: "JBL Flip 6 Bluetooth Speaker",
  description: "Portable waterproof Bluetooth speaker with powerful bass, 12-hour battery life, and crystal-clear sound.",
  price: 11999,
  category: "Electronics",
  stock: 30,
  imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
  rating: 4.8,
  numReviews: 187,  
    },
    ];
    await Product.insertMany(products);

    console.log('✅ Seed Data Imported Successfully!');

    await mongoose.connection.close();
    process.exit();

  } catch (error) {
    console.error('❌ Seed Error:', error.message);
    process.exit(1);
  }
};

importData();