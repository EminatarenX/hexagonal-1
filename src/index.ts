import express from 'express'
import ProductRouter from './product/interfaces/controllers/ProductController'
import UserRouter from './user/interfaces/controllers/userController.'
const app = express()



const port = process.env.PORT || 4000
app.use(express.json())

app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)

app.listen(port, () => {
    console.log('running on port ' + port)
})
