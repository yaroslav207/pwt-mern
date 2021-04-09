const express = require('express')
const config = require('config');
const mongoose = require('mongoose')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const User = require('./models/User')
const Orders = require('./models/Orders')
const Categories = require('./models/Categories')


AdminBro.registerAdapter(require('admin-bro-mongoose'))

const app = express();

app.use(express.json({ extended: true }))

const PORT = config.get('port') || 5000


app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/order', require('./routes/orders.routes'))
app.use('/api/user-data', require('./routes/user-data.routes'))
// app.use('/api/product', require('./routes/product.routes'))
app.use('/api/categories', require('./routes/categories.routes'))

const adminBro = new AdminBro({
    resources:[User, Orders, Categories],
    rootPath:'/admin'
})
const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)


async function start () {
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e){
        console.log('Server error ',e.message )
        process.exit(1)
    }
}

start();

app.listen(PORT, () => {console.log(`App has been started on port ${PORT} ...`)})