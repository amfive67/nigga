const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err.message));

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  course: String,
  semester: Number,
  email: String,
  marks: Number
});

const Student = mongoose.model("Student", studentSchema);

// CREATE - Add student
app.post("/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// READ - Display students
app.get("/students", async (req, res) => {
  res.json(await Student.find());
});

// UPDATE - Edit student
app.put("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
});

// DELETE - Delete student
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
