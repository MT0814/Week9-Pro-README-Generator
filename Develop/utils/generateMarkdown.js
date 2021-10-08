// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return "";
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${encodeURI(license)}-yellow.svg)](https://www.gnu.org/licenses/${encodeURI(license)})`
  }
  //   } else if (license === 'AGPL v3') {
  //     return` [![License: AGPL v3](https://img.shields.io/badge/License-${license}-blue.svg)](https://www.gnu.org/licenses/${license})`
  //   } else if (license === 'GPL v3'){
  //   return `[![License: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)](https://www.gnu.org/licenses/${license})`
  //   } else if (license === 'LGPL v3'){
  //   return`[![License: LGPL v3](https://img.shields.io/badge/License-${license}-blue.svg)](https://www.gnu.org/licenses/${license})`
  //   } else if (license === 'MPL 2.0') {
  //   return`[![License: MPL 2.0](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`
  //   } else if (license === 'Apache 2.0') {
  //   return`[![License: Apache 2.0](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  //   } else if (license === 'Boost 1.0') {
  //   return `[![License: Boost 1.0](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://www.boost.org/${license}.txt)`
  //   } else if (license === 'MIT') {
  //     return`[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  //   }else if (license=== 'Zlib') {
  //     return `[![License: Zlib](https://img.shields.io/badge/License-${license}-lightgrey.svg)](https://opensource.org/licenses/${license})`
  //   } else {
  //   return`[![License: Unlicense](https://img.shields.io/badge/license-${license}-blue.svg)](http://${license}.org/)`
  // }

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return "";
  } else {
    return `## License [![License: ${license}](https://img.shields.io/badge/License-${encodeURI(license)}-yellow.svg)](https://www.gnu.org/licenses/${encodeURI(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, userInfo) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Content 
* [Description](#description)   
* [Installation](#installation) 
* [Usage](#usage) 
${renderLicenseLink(data.license)} 
* [Contributing](#contributing) 
* [Tests](#tests) 
* [Username](#username) 
* [Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions

Please contact me with any questions.
![Developer Profile Picture](${userInfo.avatar_url}) 
GitHub: [${data.username}](https://github.com/${data.username})
Email: ${data.email}
This README was generated by [MT](https://github.com/MT0814/Week9-Pro-README-Generator) 
`;
}

module.exports = generateMarkdown;
