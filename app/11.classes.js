/*  #. Classes

    #. class keyword
    #. constructor
    #. get and set
    #. inheritance
    #. super

 */

 // ES5

 function Employee(fName,lName){
   this.fName = fName;
   this.lName = lName;
 }

 Employee.prototype.getDetails = function getDetails() {
   return this.fName + ' ' + this.lName;
 }

 var employee = new Employee('Pratik', 'Dashore');

 console.log(employee.getDetails());

// ES6

'use strict';
class SmartEmployee{

   constructor(fName,lName){
     this.fName = fName;
     this.lName = lName;
   }

   getDetails(){
     return `${this.fName} ${this.lName}`;
   }

   get age(){
     return this._age;
   }


}

let smartEmployee = new SmartEmployee('Smart', 'Dashore');
console.log(smartEmployee.getDetails());

console.log(smartEmployee.age);
smartEmployee.age = 30;
console.log(smartEmployee.age);
console.log(smartEmployee);
console.log(smartEmployee._age);
console.dir(smartEmployee);


class AccoliteEmployee extends SmartEmployee{
  constructor(fName, lName, employeeId){
    super(fName, lName);
    this.employeeId = employeeId;
  }

  getDetails(){
    return this.fName;
  }

  getCompleteDetail(){
    return ` ${super.getDetails()} ${this.employeeId}`;
  }
}

let accoliteEmployee = new AccoliteEmployee('Pratik','Dashore','00001');
console.log(accoliteEmployee.getCompleteDetail());
console.log(accoliteEmployee.getDetails());

