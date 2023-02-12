const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Alyshia', 25, 'a.lyshia@hotmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Alyshia', 25, 'a.lyshia@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 