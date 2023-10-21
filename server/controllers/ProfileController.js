const { experience, User } = require('../models')

class ProfileController {

    static async getExperience(req, res) {
        const id = req.userData.id
        try {

            let user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'user not found' })

            let ex = await experience.findAll({
                where: {
                    userId: user.id
                }
            })

            res.status(200).json(ex)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async add(req, res) {
        const id = req.userData.id
        const { name, description } = req.body
        try {

            let user = await User.findByPk(id)

            await experience.create({
                name: name,
                description: description,
                userId: user.id
            })

            res.status(201).json({ message: 'experience has been create' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const { title, description } = req.body
        try {
            const result = await experience.update({
                title, description
            }, {
                where: {
                    id
                }
            })

            result[0] === 1 ?
                res.status(200).json({ message: 'experience has been updated' }) :
                res.status(404).json({ message: 'cannot find experience' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async remove(req, res) {
        const id = req.params.id
        try {
            const result = await experience.destroy({
                where: {
                    id
                }
            })

            result === 1 ?
                res.status(200).json({ message: 'experience successfully deleted' }) :
                res.status(404).json({ message: 'experience not found' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}

module.exports = ProfileController