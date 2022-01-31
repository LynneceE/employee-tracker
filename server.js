//set up dependencies
const mysql = require ('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

//create mysql connection
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lys0lmicrowav3p1llow',
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

    //employeePrompt(); = keeps the opening prompt visible so you dont have to quit and restart for a new prompt each time

    
    // start npm inquirer
 employeePrompt();
  }); 


  function employeePrompt() {
      inquirer.prompt({
          type: 'list',
          name: 'start',
          message: 'What would you like to do?',
          choices: [
              "View Employees",
              "View Department",
              "View Roles",
              "View Employees by Department",
              
              
              



          ]
          // switch statements for choices
      }).then(function({start}){
          switch (start) {

              case "View Employees":
                  getEmployees();
                  break;

              case "View Department":
                    getDepartment();
                    break;
                    
              case "View Roles":
                     getRoles();
                     break;


              case "View Employees by Department":
                  getEmployeesByDepartment();
                  break;
             
              case "View Employees by Manager" :
                  getEmployeesbyManager();
                  break;   

              

               
          }

        

      });
  }


  // once a choice is made, display that data using sql joins (w3schools)
      function getEmployees(){
          console.log("--Employees--");
          var query = "SELECT * FROM employee"
          connection.query(query, function (err, res) {
            if (err) throw err;
            console.table(res);

            employeePrompt();
        });
        
      }


      function getDepartment(){
          console.log("--Departments--");
          var query = "SELECT * FROM department";
          connection.query(query, function(err, res) {
            if (err) throw err;
            console.table(res);
            employeePrompt();
          });
          
      }


      function getRoles(){
          console.log("--Roles--");
          var query = "SELECT * FROM role";
          connection.query(query, function(err, res) {
            if (err) throw err;
            console.table(res);
            employeePrompt();
          });
      }

      function getEmployeesByDepartment(){
          console.log("--By Department--");
          var query =
          `SELECT department.id, department.name  AS department
           FROM employee employee
           LEFT JOIN role role
	       ON employee.role_id = role.id
           LEFT JOIN department department
           ON department.id = role.department_id
           GROUP BY department.id, department.name`
      
        connection.query(query, function (err, res) {
          if (err) throw err;
              // create options from data table results
              const getDepartment = res.map(data => ({
                value: data.id, name: data.name
              }));
          console.table(res);

         
          
          departmentPrompt(getDepartment);

      });

    }

    function departmentPrompt(getDepartment) {
        inquirer.prompt([
            {
                type: 'list',
                name: "departments",
                message: "Choose a department",
                choices: getDepartment
            }
        ]).then(function(answer) {
            console.log("answer" + answer.departments);

            var query =
              `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department 
               FROM employee employee
               JOIN role role
	           ON employee.role_id = role.id
               JOIN department department
               ON department.id = role.department_id
               WHERE department.id = ?`

      connection.query(query, answer.departments, function (err, res) {
        if (err) throw err;

        console.table("response ", res);

        employeePrompt();
        });

    });
    }

    


   