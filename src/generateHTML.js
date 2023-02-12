const generateManager = function(manager){
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success text-white">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
}

const generateEngineer = function(engineer){
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success text-white">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: ${engineer.github}</p>
        </div>
    </div>
</div>`
}

const generateIntern = function(intern){
    return `<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-success text-white">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>`
}

generateCards = (data) => {

    cardArray = []

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }
        if(role === 'Engineer'){
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }
        if(role === 'Intern'){
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');

    const generateTeamPage = generateHTML(employeeCards);
    return generateTeamPage;
}

const generateHTML = function(employeeCards){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./assets/style.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="p-5 mb-4 border-5 bg-success text-center text-white rounded">
            <h1>Team Profile Generator</h1>
        </header>
        <section class="container">
            <div class="row justify-content-center" id="team-cards">
            ${employeeCards}
            </div>
            </section>
        </body>
        </html>`
}

module.exports = generateCards;