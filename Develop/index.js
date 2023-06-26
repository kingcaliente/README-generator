const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ project, description, github, linkedin, usage, guidelines, stack, installing}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h3 class="display-4"> Project Title: ${project}</h3>

      <h3>Description:</p>
      <p class="lead">${description}.</p>


      <h3>Getting Started</h3>
      <p class="lead">Dependencies: ${usage}</p>
      <p class="lead">Installing: ${guidelines}</p>


      <h3>Installing</h3>
      <p class="lead">Dependencies: ${installing}</p>

      
      <span class="badge bg-secondary">Contact Me</span>
      <ul class="list-group">
        <li class="list-group-item">Authors Name: ${github}</li>
        <li class="list-group-item"> Authors LinkedIn: ${linkedin}</li>


        <h3>License</h3>
        <p class="lead">This project is licensed under the: ${stack} + License - see the LICENSE.md file for details .</p>  


      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is your new Project Title?',
    },
    {
      type: 'checkbox',
      message: 'What license would you like applied?',
      name: 'stack',
      choices: ['MIT', 'Apache', 'Creative Commons License', 'None'],
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your new project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe any prerequisites, libraries, OS version, etc., needed before installing program',
    },
    {
      type: 'input',
      name: 'installing',
      message: 'How/where to download your program',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Contribution Guidelines and Test Instructions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the authors name',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your Github URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README File!')
    );
  });
