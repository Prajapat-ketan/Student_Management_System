const studentModel = require("../models/studentModel");

const addStudentForm = async(req,res)=>{
  res.render("studentviews/addstudentform");
};

const addStudent = async(req,res)=>{
    const student = req.body.student;
    const newStudent = await studentModel.insertOne(student);
    req.flash("success",`New student named ${newStudent.name} Successfully Added`)
    res.redirect("student/");
};

const showAllStudents = async(req,res)=>{
   const allstudents = await studentModel.find();
   res.render("studentviews/allstudents.ejs",{allstudents});
};

const showStudent = async(req,res)=>{
   const {id} = req.params;
   const student = await studentModel.findById(id);
   res.render("studentviews/showstudent.ejs",{student});
};

const editStudentForm = async(req,res)=>{
    const {id} = req.params;
    const student = await studentModel.findById(id);
    res.render("studentviews/editstudentform.ejs",{student});

};

const updateStudent = async(req,res)=>{
    const {id} = req.params;
    const student = req.body.student;
    const updatedstudent = await studentModel.findByIdAndUpdate(id,{...student},{new : true});
    console.log(updatedstudent);
    req.flash("success",`${updatedstudent.name} has been successfully updated`);
    res.redirect(`/api/sms/student/${id}`);


};

const deleteStudent = async(req,res)=>{
    const {id} = req.params;
    const Deletedstudent = await studentModel.findByIdAndDelete(id);
    console.log(Deletedstudent);
    req.flash("success",`${Deletedstudent.name} has been successfully deleted`);
    res.redirect("/api/sms/student/");
};

module.exports = {
    addStudentForm,addStudent,showAllStudents,showStudent,editStudentForm,
    updateStudent, deleteStudent
    
}

