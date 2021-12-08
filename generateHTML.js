const renderHTML = (employeeCards) => {
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
    <div class="row justify-content-center">
        ${employeeCards}
    </div>
</body>
</html>
    `
}

const generateHTML = (teamMember) => {
    let employeeInfo = [];
    for (let i = 0; i < teamMember.length; i++) {
        const employee = teamMember[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerInfo = managerCard(employee);
            employeeInfo.push(managerInfo);
        }

        if (role === "Engineer") {
            const engineerCards = engineerCard(employee);
            employeeInfo.push(engineerCards)
        }

        if (role === "Intern") {
            const internInfo = internCard(employee);
            employeeInfo.push(internInfo);
        }
    }
        const employeeCards = employeeInfo.join('');
        const generateCards = renderHTML(employeeCards)
        return generateCards

}
const managerCard = (managerInput) => {
    return  `
    <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">${managerInput.name} <strong>Manager</strong>
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
                ${internInput.name} <strong>Intern</strong>
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
    return `
    <div class="card mx-4" style="width: 18rem;">
            <div class="card-header">
            ${engineerInput.name} <strong>Engineer</strong>
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

module.exports = generateHTML;