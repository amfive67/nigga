STUDENT MANAGEMENT SYSTEM - MEAN/MEAN-STYLE EXAM PROJECT

Technologies:
AngularJS + Node.js + Express.js + MongoDB + Mongoose

FIELDS:
name, rollNo, course, semester, email, marks

ALL CRUD OPERATIONS:
1. CREATE  -> POST   /students
2. READ    -> GET    /students
3. UPDATE  -> PUT    /students/:id
4. DELETE  -> DELETE /students/:id

OTHER FEATURES:
- Search/filter students
- Add student
- Display students
- Edit/update student
- Delete student

RUN:
1. Start MongoDB.
2. Open terminal in this folder.
3. npm install
4. node server.js
5. Open http://localhost:3000

DATABASE:
Database name: studentDB
Collection: students
Seed data: database/students.json

IMPORT SEED DATA (MongoDB Database Tools):
mongoimport --db studentDB --collection students --file database/students.json --jsonArray

VIVA:
ng-model = binds form data.
ng-repeat = displays/repeats records.
filter = searches/filter records.
$http.get = READ.
$http.post = CREATE.
$http.put = UPDATE.
$http.delete = DELETE.
Express + Node.js = backend/server.
AngularJS = frontend.
MongoDB = database.
Mongoose = connects Node.js with MongoDB.
