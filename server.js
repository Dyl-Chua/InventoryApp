const express = require('express')
const router = require('./routes/inventory')
const mongoose = require('mongoose')
const productRouter = require('./routes/inventory')
const Producto = require('./models/product')
const methodOverride = require('method-override')
const app = express()

const Product = require('./models/product')

mongoose.connect('mongodb://goRush:gsb2332065@cluster0-shard-00-00.rikek.mongodb.net:27017,cluster0-shard-00-01.rikek.mongodb.net:27017,cluster0-shard-00-02.rikek.mongodb.net:27017/inventory?ssl=true&replicaSet=atlas-tr9az4-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine','ejs')


app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

app.get('/', async (req,res) =>{
  const product = await Producto.find().sort({ createdAt: 'desc'})
    res.render('product/index', { products: product})
})

app.get('/product/new', function(req,res){
    res.render('product/new');
});

app.get('/new',(req,res)=>{
    res.render('product/new', {product: new Product() })
})

app.get('/product/:id', async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if (product == null) res.redirect('/')
    res.render('product/show', { product: product})
})

app.get('/product/edit/:id', async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if (product == null) res.redirect('/')
    res.render('product/edit', { product: product})
})

app.post('/product/new', async (req, res, next)=>{
    req.product = new Product()
    next()
}, saveProductAndRedirect('new'))

app.put('/product/:id', async (req, res, next)=>{
    req.product = await Product.findById(req.params.id)
    next()
}, saveProductAndRedirect('edit'))


app.delete('/product/:id', async (req,res)=>{
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveProductAndRedirect(path)   {
    return async (req,res) => {
        let product = req.product
            product.title = req.body.title
            product.description = req.body.description
        try{
        product = await product.save()
        res.redirect(`/product/${product.id}`)
    } catch(e)  {
    res.render(`/product/${path}`, { product: product})
    }
    }
}


app.use('/inventory', productRouter)

app.listen(3000)