//create server
const express = require('express');
const cookieParsar = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')

const app = express();
app.use(cookieParsar());
app.use(express.json());


app.get("/" , (req , res)=>{
res.send("hellov word")
})
app.use('/api/auth', authRoutes);
module.exports = app;