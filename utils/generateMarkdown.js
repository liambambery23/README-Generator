
// function to generate markdown for README
function generateMarkdown(data) {

  
  return `# ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-green)

  ## Description: 

  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation: 

  [GitHub Repository](https://github.com/${data.username}/${data.repository})

  ${data.installation}

  ## Usage: 

  ${data.usage}

  ## Contributing: 

  ${data.contributing}

  ## Tests: 

  ${data.tests}

  ## Questions:

  If you have any questions regarding this project, please contact me via email.
  
  ${data.email}

  Github Username: [${data.username}](https://github.com/${data.username})


  ## License:

  This project uses the ${data.license} License

`;
}

module.exports = generateMarkdown;
