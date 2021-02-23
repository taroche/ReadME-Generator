
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-red)]`
}

function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
    return `(https://opensource.org/licenses/Apache-2.0)`
    break;
    case "BSD 3-Clause license":
    return `(https://opensource.org/licenses/BSD-3-Clause)`
    break;
    case "BSD 2-Clause license":
    return `(https://opensource.org/licenses/BSD-2-Clause)`
    break;
    case "GNU General Public License (GPL)":
    return `(https://opensource.org/licenses/gpl-license)`
    break;
    case `GNU Library or "Lesser" General Public License (LGPL)`:
    return `(https://opensource.org/licenses/lgpl-license)`
    break;
    case "MIT license":
    return `(https://opensource.org/licenses/MIT)`
    break;
    case "Mozilla Public License 2.0":
    return `(https://opensource.org/licenses/MPL-2.0)`
    break;
    case "Common Development and Distribution License":
    return `(https://opensource.org/licenses/CDDL-1.0)`
    break;
    case "Eclipse Public License version 2.0":
    return `(https://opensource.org/licenses/EPL-2.0)`
    break;
  }
}

function renderLicenseSection(license) { 
  let renderedLicense = renderLicenseBadge(license)
  let renderedLink = renderLicenseLink(license)
  return `
  ## License

  ${renderedLicense}${renderedLink}`
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
