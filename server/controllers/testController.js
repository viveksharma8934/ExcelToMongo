const multer = require("multer");
const express = require("express");
const excelToJson = require("convert-excel-to-json");
const router = express.Router();
const Employee = require("../models/Employee");
const async = require("async");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const filePath = "./uploads/" + req.file.originalname;
  const data = await excelToJson({
    sourceFile: filePath,
    header: {
      rows: 1,
    },
    columnToKey: {
      A: "name",
      B: "email",
      C: "phone",
      D: "DOB",
      E: "WorkExperience",
      F: "ResumeTitle",
      G: "CurrentLocation",
      H: "PostalAddress",
      I: "CurrentEmployer",
      J: "CurrentDesignation",
    },
  });
  async.eachSeries(
    data.Sheet1,
    async (item) => {
      const takeEmail = Employee.findOne({ email: item.email });
      if (takeEmail) return;
      const employee = new Employee({
        name: item.name,
        email: item.email,
        phone: item.phone,
        DOB: item.DOB,
        WorkExperience: item.WorkExperience,
        ResumeTitle: item.ResumeTitle,
        CurrentLocation: item.CurrentLocation,
        PostalAddress: item.PostalAddress,
        CurrentEmployer: item.CurrentEmployer,
        CurrentDesignation: item.CurrentDesignation,
      });
      await employee.save();
    },
    (err) => {
      if(!err){
        console.log("Data inserted successfully");
      };
    }
  );
  res.send({
    message: "Data inserted successfuly",
    filename: req.file.originalname,
  });
});

module.exports = router;
