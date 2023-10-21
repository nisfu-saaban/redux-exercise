const { User, Profile, experience } = require('../models')
const { encrypt, decrypt } = require('../helper/bcrypt')
const { generateToken, verifyToken } = require('../helper/jwt')
const { Op } = require('sequelize')

class UserController {
    static async getUsers(req, res) {
        try {
            let users = await User.findAll({
                attributes: ['username', 'email']
            })
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static async login(req, res) {
        const { username, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    username
                }
            })

            const match = decrypt(password, user.password)
            if (!match) return res.status(400).json({ message: 'wrong password' })

            const token = generateToken(user.dataValues)

            const decode = verifyToken(token)
            // console.log(decode)
            res.status(200).json({ token: token })

        } catch (e) {

        }
    }

    static async about(req, res) {
        const id = req.userData.id
        try {

            const user = await User.findByPk(id)

            if (!user) return res.status(404).json({ message: 'user not found' })

            const profile = await Profile.findOne({
                where: {
                    userId: user.id
                }
            })

            res.status(200).json(profile)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async register(req, res) {
        const { username, email, password } = req.body
        // console.log(password)

        try {
            let find = await User.findOne({
                where: {
                    [Op.or]: [
                        { username: username },
                        { email: email }
                    ]
                }
            })

            if (find) {
                return res.status(400).json({ message: 'user already exist' })
            } else {
                let user = await User.create({
                    username, email, password
                })

                await Profile.create({
                    userId: user.id
                })

                res.status(201).json({ message: 'register successfully' })
            }

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async updateUser(req, res) {
        const id = req.userData.id

        const { username, email, password, fullName, address, contry } = req.body

        try {
            const user = await User.findByPk(id)

            // console.log(user)

            const newPassword = (password && password.length === 0) ? user.password : encrypt(password)

            if (!user) return res.status(404).json({ message: 'user not found' })
            await User.update({
                username: username,
                email: email,
                password: newPassword
            }, {
                where: {
                    id
                }
            })

            await Profile.update({
                fullName,
                address,
                contry
            }, {
                where: {
                    userId: user.id
                }
            })

            res.status(200).json({ message: 'user already updated' });
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async removeUser(req, res) {
        const id = req.userData.id
        try {
            await User.destroy({
                where: {
                    id
                }
            })

            await Profile.destroy({
                where: {
                    userId: id
                }
            })

            await experience.destroy({
                where: {
                    userId: id
                }
            })

            res.status(200).json({ message: 'user already removed' })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = UserController