const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

// Dummy user credentials
const users = {
    "user1@gmail.com": "password1",
    "user2@gmail.com": "password2",
};

// Enriched user data (with detail)
const user = [
    {
        id: 0,
        name: "Ahmad Damanhuri",
        age: 25,
        email: "user1@gmail.com",
        address: "Jl. Merdeka No.1, Jakarta",
        createdAt: "08-Apr-2022"
    },
    {
        id: 1,
        name: "Ahmad Jazuli",
        age: 30,
        email: "user2@gmail.com",
        address: "Jl. Sudirman No.2, Bandung",
        createdAt: "10-Apr-2022"
    }
];

// Enriched product data (with detail)
const product = [
    {
        id: 0,
        name: "iPhone 14",
        brand: "Apple",
        price: 15000000,
        stock: 26,
        description: "Smartphone flagship dari Apple dengan kamera ganda dan Face ID",
        createdAt: "01-Aug-2021"
    },
    {
        id: 1,
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: 14000000,
        stock: 33,
        description: "HP Android kelas atas dengan layar AMOLED dan kamera ultra-wide",
        createdAt: "05-Aug-2021"
    }
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const userPassword = users[email];

    if (userPassword === password) {
        return res.status(200).json({
            token: generateSecureRandomString(100),
            user,
            product
        });
    }

    res.status(401).json({ message: "Email atau password anda salah" });
});

// Get user detail by ID (index)
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= user.length) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user[id]);
});

// Get product detail by ID (index)
app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= product.length) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product[id]);
});

// Start server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

// Token generator
function generateSecureRandomString(length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}
