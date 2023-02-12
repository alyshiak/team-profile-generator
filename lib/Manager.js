const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole(){
        return 'Manager';
    }

}


module.exports = Manager
// fake program
//let newDude = new Manager('dave', 'x838383', 'dave@work.com', 'c100');
//newDude.getEmail()