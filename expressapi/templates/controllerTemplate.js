import Thing from '../models/thing.js'

const ThingController = {
    async index(req, res) {
        try {
            ThingController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const things = await Thing.findAll()
        res.status(200)
        res.json({
            success: true,
            data: things
        })
    },
    async show(req, res) {
        try {
            ThingController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const thing = await Thing.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: thing
        })
    },
    async create(req, res) {
        try {
            ThingController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const thing = await Thing.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: thing
        })
    },
    async update(req, res) {
        try {
            ThingController.tryUpdate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryUpdate(req, res) {
        const thing = await Thing.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: thing
        })
    },
    async destroy(req, res) {
        try {
            ThingController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const thing = await Thing.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: thing
        })
    }
}

export default ThingController