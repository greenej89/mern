const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.post('/api/products', ProductController.create)
    app.get('/api/products', ProductController.findAll)
    app.get('/api/products/:id', ProductController.findById)
    app.put('/api/products/:id', ProductController.update)
    app.delete('/api/products/:id', ProductController.deleteById)
}