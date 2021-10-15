const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your GitHub username :',
            name: 'user_github',
        },
        {
            type: 'input',
            message: 'Enter your Email address :',
            name: 'user_email',
        },
        {
            type: 'input',
            message: 'Enter Project name :',
            name: 'title',
          },
          {
            type: 'input',
            message: 'Provide a short description of your Project.\n - What inspired the author?\n - What problems did it solve?\n',
            name: 'description',
          },
          {
            type: 'list',
            message: 'Type of license used :',
            choices: ['MIT', 'APACHE 2.0', 'GNU GPLv3', 'BSD 3', 'None'],
            name: 'license',
          },
          {
            type: 'input',
            message: 'Installation requirements :',
            name: 'installation',
          },
    ]);
  };

  const createMarkdown = ({ name, location, github, linkedin }) =>


  (() => {
    promptUser()
      .then((response) => fs.writeFileSync('README.md', createMarkdown(response)))
      .then(() => console.log('Successfully generated README.md'))
      .catch((err) => console.error(err));
  })();