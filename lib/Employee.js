class Employee {
    constructor(n, i, e) {
        this.name = n;
        this.id = i;
        this.email = e;
    }

    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return `employee`
    }
}

module.exports = Employee;


// fake program
//let newDude = new Employee('dave', 'x838383', 'dave@work.com')

//let dudesName = newDude.getName();

//let dudesEmail = newDude.getEmail();

// {
//     name: 'dave',
//     id: 'x838383',
//     email: 'fjewi'

// functions
// }

