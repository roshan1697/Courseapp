import express from "express"
import {Course , Admin} from "../modal/coursemodal"
import { jwt } from "jsonwebtoken"
import { SECRET } from "../config"
import authJwt from "../middleware/jsonwt"

const router = express.Router()

router.post('/signup', async(req ,res)=>{
    const { username, password } = req.body
    const admin = await Admin.findOne({ username})
    if (admin) {
        res.status(403).json({ message: 'Admin already exists' })
    }
    const newAdmin = new Admin({ username: username, password: password });
    await newAdmin.save()
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' })
    res.json({ message: 'Admin created successfully', token })

})

router.post('/login', async (req, res) => {
    const { username, password } = req.headers
    const admin = await Admin.findOne({ username, password })
    if (admin) {
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' })
        res.json({ message: 'Logged in successfully', token })
    } 
    res.status(403).json({ message: 'Invalid username or password' })
    
})

router.post('/course', authJwt, async (req, res) => {
    const course = new Course(req.body)
    await course.save()
    res.json({ message: 'Course created successfully', courseId: course.id })
})

router.put('/courses/:courseId', authJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true })
    if (course) {
        res.json({ message: 'Course updated successfully' })
    }
    res.status(404).json({ message: 'Course not found' })
    
})

router.get('/courses', authJwt, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
})


export default router