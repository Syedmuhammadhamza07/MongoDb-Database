import express from 'express'
import Orders from '../models/Orders.mjs'
const router = express.Router()

router.get('/', async (req, res) => {
    const orders = await Orders.find()
    res.send({ message: "Orders fetched successfully!", data: orders })
})

router.post('/add', async (req, res) => {
    await Orders.create(req.body)
    res.send({ message: "Orders added successfully!" })
})

export default router
