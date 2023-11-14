var students = []; // Empty array to store students

function addStudent() {
  // Get form data
  var name = document.getElementById('name').value;
  var age = parseInt(document.getElementById('age').value);
  var department = document.getElementById('department').value;
  var totalMarks = parseInt(document.getElementById('totalMarks').value);

  // Create a new student object
  var newStudent = {
    name: name,
    age: age,
    department: department,
    totalMarks: totalMarks
  };

  // Add the new student to the array
  students.push(newStudent);

  // Clear the form
  document.getElementById('studentForm').reset();

  // Display the updated list of students
  displayStudents();
}

function displayStudents() {
  var tableContainer = document.getElementById('tableContainer');
  var table = '<table>';
  table += '<tr><th>Name</th><th>Age</th><th>Department</th><th>Total Marks</th></tr>';

  var searchTerm = document.getElementById('search').value.toLowerCase();

  for (var i = 0; i < students.length; i++) {

      if (
      students[i].name.toLowerCase().includes(searchTerm) ||
      students[i].age.toString().includes(searchTerm) ||
      students[i].department.toLowerCase().includes(searchTerm) ||
      students[i].totalMarks.toString().includes(searchTerm)
    )
  {
    table += '<tr>';
    table += '<td>' + students[i].name + '</td>';
    table += '<td>' + students[i].age + '</td>';
    table += '<td>' + students[i].department + '</td>';
    table += '<td>' + students[i].totalMarks + '</td>';
    table += '</tr>';
  }
}

  table += '</table>';
  tableContainer.innerHTML = table;
}
function SortData() {
  var sortField = document.getElementById('sortField').value;

  students.sort(function(a, b) {
    // Compare the values based on the selected field
    return a[sortField] > b[sortField] ? 1 : -1;
  });

  // Display the updated list of students after sorting
  displayStudents();
}
function FilterData() {
  // Display the updated list of students after filtering
  displayStudents();
}

function FilterMarks() {
  var filterMark = parseInt(document.getElementById('filterMark').value);

  var filteredStudents = students.filter(function(student) {
    return student.totalMarks > filterMark;
  });

  var tableContainer = document.getElementById('tableContainer');
  var table = '<table>';
  table += '<tr><th>Name</th><th>Age</th><th>Department</th><th>Total Marks</th></tr>';

  for (var i = 0; i < filteredStudents.length; i++) {
    table += '<tr>';
    table += '<td>' + filteredStudents[i].name + '</td>';
    table += '<td>' + filteredStudents[i].age + '</td>';
    table += '<td>' + filteredStudents[i].department + '</td>';
    table += '<td>' + filteredStudents[i].totalMarks + '</td>';
    table += '</tr>';
  }

  table += '</table>';
  tableContainer.innerHTML = table;
}