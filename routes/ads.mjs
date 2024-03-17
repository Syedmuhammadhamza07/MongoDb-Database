import express from 'express'
import Ads from '../models/Ads.mjs'
import verifyToken from '../middlewares/verifyToken.mjs'
const router = express.Router()

//GET: localhost:3001/ads
router.get('/', async (req, res) => {
    const ads = await Ads.find()
    res.send({ message: 'Ads fetched successfully', data: ads })
})

// router.get('/:id')

router.post('/post', verifyToken, async (req, res) => {
    try {
        const ad = new Ads(req.body)
        await ad.save()

        res.send({ message: 'Ad posted successfully' })
    } catch (e) {
        res.send({ message: e.message })
    }
})

//router.put('/:id')
//router.delete('/:id')

export default router