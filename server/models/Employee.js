const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    WorkExperience: {
        type: String,
        required: true
    },
    ResumeTitle: {
        type: String,
        required: true
    },
    CurrentLocation: {
        type: String,
        required: true
    },
    PostalAddress: {
        type: String,
        required: true
    },
    CurrentEmployer: {
        type: String,
    },
    CurrentDesignation: {
        type: String,
    },
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;