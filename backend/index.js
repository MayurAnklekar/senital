const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/auth')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api", (req, res) => {
    res.json({
        "users":["userOne", "userTwo", "userThree"]
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})