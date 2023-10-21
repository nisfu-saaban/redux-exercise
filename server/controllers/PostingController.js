const { Posting, User } = require('../models')
const { Op } = require('sequelize')

class PostingController {

    static async getPosting(req, res) {
        try {
            let postings = await Posting.findAll({
                includes: [User]
            })

            res.status(200).json(postings)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async getPostingForUser(req, res) {
        const id = req.userData.id
        try {
            const user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'user not found' })

            const postingByUser = await Posting.findAll({
                where: {
                    userId: user.id
                }
            })

            res.status(200).json(postingByUser)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async createPosting(req, res) {
        const id = req.userData.id
        const { title, description } = req.body
        try {

            const user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'user not found' })

            await Posting.create({
                title: title,
                description: description,
                userId: user.id
            })

            res.status(201).json({ message: 'Posting successfully created' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async update(req, res) {
        const idPosting = req.params.id
        const idUser = req.userData.id
        const { title, description, isPosting } = req.body
        try {

            await Posting.update({
                title, description, isPosting
            }, {
                where: {
                    [Op.and]: [
                        { id: idPosting },
                        { userId: idUser }
                    ]
                }
            })

            res.status(200).json({ message: 'posting successfully updated' })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async deletePosting(req, res) {
        const id = req.params.id
        try {
            const result = await Posting.destroy({
                where: {
                    id
                }
            })

            result === 1 ?
                res.status(200).json({ message: 'posting has been deleted' }) :
                res.status(404).json({ message: 'posting not found' })
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}

module.exports = PostingController