const Intern = require('../lib/Intern');
 
test('creates an Intern object', () => {
    const intern = new Intern ('Alyshia', 25, 'a.lyshia@hotmail.com', 'Monash');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets intern school value', () => {
    const intern = new Intern('Alyshia', 25, 'a.lyshia@hotmail.com', 'Monash');

    expect(intern.school()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Alyshia', 25, 'a.lyshia@hotmail.com', 'Monash');

    expect(intern.getRole()).toEqual("Intern");
});