

function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
    return `[![License:%20Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)`
    break;
    case "BSD 3-Clause license":
    return `[![License:%20BSD%203-Clause](https://img.shields.io/badge/License-BSD%203-Clause-red.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    break;
    case "BSD 2-Clause license":
    return `[![License:%20BSD%202-Clause](https://img.shields.io/badge/License-BSD%202-Clause-red.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    break;
    case "GNU General Public License (GPL)":
    return `[![License:%20gpl-license](https://img.shields.io/badge/License-GPL%20license-red.svg)](https://opensource.org/licenses/gpl-license)`
    break;
    case `GNU Library or "Lesser" General Public License (LGPL)`:
    return `[![License:%20lgpl-license](https://img.shields.io/badge/License-LGPL%20license-red.svg)](https://opensource.org/licenses/lgpl-license)`
    break;
    case "MIT license":
    return `[![License:%20MIT%20license](https://img.shields.io/badge/License-MIT%20license-red.svg)](https://opensource.org/licenses/MIT)`
    break;
    case "Mozilla Public License 2.0":
    return `[![License:%20MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`
    break;
    case "Common Development and Distribution License":
    return `[![License:%20CDDL-1.0](https://img.shields.io/badge/License-CDDL%201.0-red.svg)](https://opensource.org/licenses/CDDL-1.0)`
    break;
    case "Eclipse Public License version 2.0":
    return `[![License:%20EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
    break;
  }
}

function renderLicenseSection(license) { 
  return `
  ## License

  ${renderLicenseLink(license)}`
}

function renderTableOfContent(inst, us, con, tes) {
  return `
  ## Table of Contents
  
  ${inst !== '' ? '* [Installation](#installation)': ''}
  ${us !== '' ? '* [Usage](#usage)': ''}
  ${con !== '' ? '* [Contributing](#contributing)': ''}
  ${tes !== '' ? '* [Tests](#tests)': ''}
  * [Questions](#questions)`
}

function renderDescription(data) {
  return `
  ## Description 
  
  *The what, why, and how:* 
  
  ${data}`
}

function renderInstallation(data){
  return `
  ${data !== '' ? `  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data}`: ''}`
}

function renderUsage(data) {
  return `
  ${data !== '' ? `   
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data}`: ''}`
}

function renderContributing(data) {
  return `
  ${data !== '' ? `   
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data}`: ''}`
}

function rendertests(data) {
  return `
  ${data !== '' ? `   
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data}`: ''}`
}

function generateMarkdown(data) {

  let draftMarkdown =
    `# ${data.title}

  ${renderLicenseSection(data.license)}
  
  ${renderDescription(data.description)}

  ${renderTableOfContent(data.installation, data.usage, data.contributing, data.tests)}

  ${renderInstallation(data.installation)}

  ${renderUsage(data.usage)}

  ${renderContributing(data.contributing)}

  ${rendertests(data.tests)}

  ## Questions
  
  This is how you can get a hold of me either at my Github account or by email.
  
  GiuHub username: [${data.username}](https://www.github.com/${data.username})
  
  Email: [${data.email}](mailto:${data.email})
  `

  return draftMarkdown;
}

module.exports = generateMarkdown;
