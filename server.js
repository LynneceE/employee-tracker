//set up dependencies
const mysql = require ('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

//create mysql connection
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

// create connection (documentation found at https://github.com/mysqljs/mysql)
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   // confirm connection run npm start
    console.log('Connected!');
    
    // start npm inquirer
 employeePrompt();
  }); 


  function employeePrompt() {
      inquirer.prompt({
          type: 'list',
          name: 'pick',
          message: 'What would you like to do?',
          choices: [
              "View Employees",
              "View Roles",
              "View Departments",
              "View Employees by Department"
          ]
      })
  }