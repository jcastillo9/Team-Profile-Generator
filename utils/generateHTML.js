const renderHTML = (indexInput) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="col-12">
        <section class="row justify-content-center">
        ${employeeCards}
          </section>
    </main>
</body>
</html>
    `
}

const generateHTML = (employeeTeam) => {
    let cardsArray = [];
    for (let i = 0; i < employeeTeam.length; i++) {
        const employee = employeeTeam[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerInfo = managerCard(employee);
            cardArray.push(managerInfo);
        }

        if (role === "Engineer") {
            const engineerInfo = engineerCard(employee);
            cardArray.push(engineerInfo)
        }

        if (role === "Intern") {
            const internInfo = internCard(employee);
            cardArray.push(internInfo)
        }

        const cards = cardArray.join('');
        const generateCards = renderHTML(cards)
        return generateCards
    } 
}
const managerCard = (managerInput) => {
    return  `
    <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">${managerInput.name}Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${managerInput.id}</li>
                <li class="list-group-item">Email:<a href="mailto:"><strong>${managerInput.email}</strong></a></li>
                <li class="list-group-item">Office Number: ${managerInput.officeNumber}</li>
              </ul>
          </div>
    `
}

const internCard = (internInput) => {
    return `
    <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">
                ${internInput.name}Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${internInput.id}</li>
                <li class="list-group-item">Email:<a href="mailto:"><strong>${internInput.email}</strong></a></li>
                <li class="list-group-item">School: ${internInput.school}</li>
              </ul>
          </div>
          `
}

const engineerCard = (engineerInput) => {
    `
    <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">
            ${engineerInput.name}Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineerInput.id}</li>
                <li class="list-group-item">Email:<a href="mailto:"><strong>${engineerInput.email}</strong></a></li>
                <li class="list-group-item">Github:
                    <a href="mailto:"><strong>${engineerInput.github}</strong></a></li>
              </ul>
          </div>
    `
}