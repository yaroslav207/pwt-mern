const {Router} = require('express');
const Categories = require('../models/Categories')
const auth = require('../middleware/auth.middleware')
const config = require('config')
const router = Router()

router.get(
    '/',
    async (req, res) => {
    try {
        const categories = await Categories.find({})

        res.status(201).json({categories})

    } catch (e) {
        res.status(500).json({message: `Что-то пошло не так, попробуйте снова ${e}`})
    }
})


module.exports = router