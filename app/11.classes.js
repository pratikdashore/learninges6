/*  #. Classes

    #. class keyword
    #. constructor
    #. get and set
    #. inheritance
    #. super

 */

// ES5

function Employee(fName, lName) {
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
class SmartEmployee {

  #imprivate;

  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
    this.#imprivate = 'Hello Private';
  }

  static displayName = 'Smart Employee';

  getDetails() {
    return `${this.fName} ${this.lName}`;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  get privatevar() {
    return this.#imprivate;
  }


}
console.log(`Display Name :: ${SmartEmployee.displayName}`);

let smartEmployee = new SmartEmployee('Smart', 'Dashore');
console.log('get Details', smartEmployee.getDetails());

console.log('FullName', smartEmployee.fullName);
console.log(smartEmployee);

console.log('Private Prop', smartEmployee.imprivate);
console.log('Private Prop with getter', smartEmployee.privatevar);


class AccoliteEmployee extends SmartEmployee {
  constructor(fName, lName, employeeId) {
    super(fName, lName);
    this.employeeId = employeeId;
  }

  getDetails() {
    return this.fName;
  }

  getCompleteDetail() {
    console.log(`${super.fullName} ${this.employeeId}`);
    return ` ${super.getDetails()} ${this.employeeId}`;
  }
}

let accoliteEmployee = new AccoliteEmployee('Pratik', 'Dashore', '00001');
console.log(accoliteEmployee.getCompleteDetail());
console.log(accoliteEmployee.getDetails());

console.log(accoliteEmployee.privatevar);

