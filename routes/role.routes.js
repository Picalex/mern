const {Router} = require('express')
const config = require('config')
const Role = require('../models/Role')
const auth = require('../middleware/auth.middleware')
const router = Router()
const jwt = require('jsonwebtoken')

router.post('/create', auth, async (req, res) => {
    try {
        const {name} = req.body
        const condidate=await Role.findOne({roleName:name})
        if(condidate){
            res.status(201).json({ message: 'Role already have' })
        }
        const role = new Role({roleName:name})
        await role.save()
        console.log('add__'+role)
        res.status(201).json({ message: 'add ok' })
    } catch (e) {
        res.status(500).json({ message: '���-�� ����� �� ���, ���������� �����' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const roles = await Role.find({})
        res.json(roles)
    } catch (e) {
        res.status(500).json({ message: '���-�� ����� �� ���, ���������� �����' })
    }
})

router.post('/remove', auth, async (req, res) => {
    try {
        const role = await Role.findById(req.body.role._id)
        console.log('remove__'+role)
        role.remove()
        res.status(201).json({ message: 'delete ok' })
    } catch (e) {
        res.status(500).json({ message: '���-�� ����� �� ���, ���������� �����' })
    }
})

module.exports = router
