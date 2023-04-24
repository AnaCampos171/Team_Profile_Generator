const generateHTML = function(teamString) {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
        </head>
        <body>
          <header>
            <h1>My Team</h1>
          </header>
          <main>
            <section>
              ${teamString}
            </section>
          </main>
        </body>
      </html>`;
  };
  
  const generateManagerCard = function(manager) {
    return `<article>
              <h2>${manager.getName()}</h2>
              <h3>Manager</h3>
              <p>Employee ID: ${manager.getId()}</p>
              <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p>Office Number: ${manager.getOfficeNumber()}</p>
            </article>`;
  };
  
  const generateEngineerCard = function(engineer) {
    return `<article>
              <h2>${engineer.getName()}</h2>
              <h3>Engineer</h3>
              <p>Employee ID: ${engineer.getId()}</p>
              <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
              <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
            </article>`;
  };
  
  const generateInternCard = function(intern) {
    return `<article>
              <h2>${intern.getName()}</h2>
              <h3>Intern</h3>
              <p>Employee ID: ${intern.getId()}</p>
              <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
              <p>School: ${intern.getSchool()}</p>
            </article>`;
  };
  
  exports.generateHTML = generateHTML;
  exports.generateManagerCard = generateManagerCard;
  exports.generateEngineerCard = generateEngineerCard;
  exports.generateInternCard = generateInternCard;
  