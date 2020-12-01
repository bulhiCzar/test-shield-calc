const {Router} = require('express')

const route = Router()

route.post(
    '/',
    async (req, res)=>{
        try {
            const {} = req.body

            res.json({m: 'good'})
        }catch (e) {
            res.json({m: 'error'})
        }
    }
)

module.exports = route