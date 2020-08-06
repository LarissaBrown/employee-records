
//You are to create a collection of employee's information for your company. Each employee has the following attributes:

//Name
//Job title
//Salary
//Status
//First, you will create an empty array named employees
const employees =[]

//Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".
function Employee (name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Full-time"
    //This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
    this.printEmployeeForm = function() {

        console.log(this.name, this.jobTitle, this.salary, this.status)
        return {
            name: this.name,
            jobTitle: this.jobTitle,
            salary: this.salary,
            status: this.status,
        }
}
}
//(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")
//You will then:

//Instantiate three employees
const jody = new Employee ("Jody", "Cashier", "minimum wage", "Part-time")
 

const amy = new Employee ("Amy", "Teacher", "$60K", "contract")


 const david = new Employee ("David", "Architect", "$100K", "Full-time")
 


//Override the status attribute of one of them to either "Part Time" or "Contract"
//Call the printEmployeeForm method for each employee
employees.push(jody.printEmployeeForm());

employees.push(amy.printEmployeeForm());

employees.push(david.printEmployeeForm());

//Put the generated employees into the employees array using whichever method you prefer.
console.log(employees)