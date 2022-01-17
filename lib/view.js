const cTable = require('console.table')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});



class View{

viewData(viewDRE) {
    if (viewDRE === "View all departments") {
       connection.query(
        select *
        from `employee_tracker.department`,
        function(results) {
        console.table(results)
        }
       ) 
    }
}
    
}


module.exports = View