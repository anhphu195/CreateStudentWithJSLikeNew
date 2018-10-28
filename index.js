var Student = require('./student');
var students = [];
var fs = require('fs');
var readlineSync = require('readline-sync');
console.log('1. Show all Student');
console.log('2. Create a new Student');
console.log('3. Delete AltData');
var quest = readlineSync.question('> : ');
if (quest === '1'){
  if (fs.existsSync('listStudent.json')){
    var studentsExtFor1 = JSON.parse(fs.readFileSync('./listStudent.json','utf8'));
    var count = 1;
    for(var index of studentsExtFor1){
      console.log(count+'.Student : '+ index.name + ' in Class '+ index.klass);
      count++;
    }
  }
  if (!fs.existsSync('listStudent.json')){
    console.log('nothings');
  }
}
if (quest === '2'){
  var nameStudent = readlineSync.question('Name : ');
  var classStudent = readlineSync.question('Class : ');
  students.push(new Student(nameStudent,classStudent));
  if (fs.existsSync('listStudent.json')) {
    var studentsExt = JSON.parse(fs.readFileSync('./listStudent.json','utf8'));
    studentsExt.push(new Student(nameStudent,classStudent));
    fs.writeFileSync('listStudent.json', JSON.stringify(studentsExt));
    console.log('Created!');
  }
  if (!fs.existsSync('listStudent.json')){
    fs.appendFile('listStudent.json', JSON.stringify(students), function (err) {
      if (err) throw err;
      console.log('Created!');
    });
  }
}
if (quest === '3'){
  var quest2 = readlineSync.question('y/n : ');
  if(quest2 === 'y'){
    fs.unlink('listStudent.json', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
    return;
  }
  console.log('Then NO!!!');
}
