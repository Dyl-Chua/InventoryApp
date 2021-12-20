const express = require('express')
const Product = require('./../models/product')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('product/new', {product: new Product() })
})

router.get('/:id', async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if (product == null) res.redirect('/')
    res.render('product/show', { product: product})
})

router.post('/product/new', async (req,res)=>{
    const product = new Product({
        title: req.body.title,
        description: req.body.description
    })
    try{
    Product = await Product.save()
    res.redirect(`/product/${product.id}`)
} catch(e)  {
    console.log(e)
res.render('/product/new', { product: product})
}
})

/*
router.post(('/product/new1'), (req,res)=>{
    const product = new Product({
        title: req.body.title,
        description: req.body.description
    })
    res.render('product/new1', { product: product})
})
*/
module.exports = router;