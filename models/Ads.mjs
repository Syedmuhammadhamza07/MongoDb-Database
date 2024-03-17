import mongoose from 'mongoose';
const { Schema } = mongoose;

const adsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

const Ads = mongoose.model('ads', adsSchema);

export default Ads
