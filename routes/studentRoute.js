const express = require("express");
const { showAllStudents, showStudent, addStudentForm,
        addStudent, editStudentForm,
        updateStudent, deleteStudent } = require("../controller/studentController");
const {joiStudentSchema} = require("../joiSchema");     
const {joiStudentMiddleware} = require("../Middlewares/joiMiddleware");   
const authUserMiddleware = require("../Middlewares/authMiddleware");
const router = express.Router();

router.get("/",authUserMiddleware,showAllStudents);
router.get("/addform",authUserMiddleware,addStudentForm);
router.get("/:id",authUserMiddleware,showStudent);
router.post("/",authUserMiddleware,authUserMiddleware,joiStudentMiddleware(joiStudentSchema),addStudent);
router.get("/:id/editform",authUserMiddleware,editStudentForm);
router.put("/:id",authUserMiddleware,joiStudentMiddleware(joiStudentSchema),updateStudent);
router.delete("/:id",authUserMiddleware,deleteStudent);
module.exports = router;

