const {Router} = require('express')

const router = Router()

router.post(
    '/click',
    async (req, res) => {
        try {
            const {value} = req.body

            console.log(value)

            res.json({m: 'good', value})
        } catch (e) {
            res.json({m: 'error'})
        }
    }
)

module.exports = router