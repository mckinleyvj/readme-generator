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
            type: 'editor',
            message: 'Provide a short description of your Project :',
            name: 'description',
          },
          {
            type: 'list',
            message: 'Type of license used :',
            choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'MPL-2.0', 'BSL-1.0', 'AGPL-3.0','None'],
            name: 'license',
          },
          {
            type: 'editor',
            message: 'Contribution guidelines :',
            name: 'contributing',
          },
          {
            type: 'editor',
            message: 'Test instructions :',
            name: 'tests',
          },
          {
            type: 'editor',
            message: 'Installation requirements :',
            name: 'installation',
          },
          {
            type: 'editor',
            message: 'Usage Information :',
            name: 'usage',
          },
    ]);
  };

  const createMarkdown = ({ user_github, user_email, title, description, license, contributing, tests, installation, usage}) =>
  `
  # ${title}
  [![license](https://img.shields.io/static/v1?label=license&message=${license}&color=red)](https://choosealicense.com/licenses/${license})

  ## ✨Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## ✨Installation
  ${installation}

  ## ✨Usage
  ${usage}
  
  ## ✨License

  Copyright (c) Microsoft Corporation. All rights reserved.

  Licensed under the [${license}] license.
  
  ## ✨Contributing
  ${contributing}
  
  ## ✨Tests
  ${tests}
  
  ## ✨Questions
  
  Visit my [GitHub profile](https://github.com/${user_github}) for more information about me and my other repositories.

  You can also send me an <a href="mailto:${user_email}?">email</a> to know more information.
  
  `;


  (() => {
    console.log("===========================================================");
    console.log("Please proceed to answer the prompts using Markdown syntax.")
    console.log("===========================================================");
    promptUser()
      .then((response) => fs.writeFileSync('README.md', createMarkdown(response)))
      .then(() => console.log('Successfully generated README.md'))
      .catch((err) => console.error(err));
  })();