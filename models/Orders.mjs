import mongoose from 'mongoose'
const { Schema } = mongoose

const ordersSchema = new Schema({
    adId: {
        required: true,
        type: String
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    userId: {
        required: true,
        type: String
    }
})

const Orders = mongoose.model('orders', ordersSchema)

export default Orders