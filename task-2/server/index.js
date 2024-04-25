const express = require('express');
const cors = require('cors');
require('dotenv').config()

const sequelize = require('./util/db')
const taskRoute = require('./routes/task')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/task',taskRoute)

sequelize.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started on port ${PORT}` )
    })
})
.catch(err => console.log('somthing wrong with db',err))


