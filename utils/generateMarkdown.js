
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

function renderTableOfContent(data) {
  return `
  ## Table of Contents
  
  ${data.installation !== '' ? '* [Installation](#installation)': ''}
  ${data.usage !== '' ? '* [Usage](#usage)': ''}
  ${data.contributing !== '' ? '* [Contributing](#contributing)': ''}
  ${data.tests !== '' ? '* [Tests](#tests)': ''}
  * [Questions](#questions)`
}




function generateMarkdown(data) {

  let draftMarkdown =
    `# ${data.title}

  ${renderLicenseSection(data.license)}
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${data.description}

  ${renderTableOfContent(data)}
  `


  if (data.installation !== '') {
    draftMarkdown +=
      `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data.installation}`
  };
  if (data.usage !== '') {
    draftMarkdown +=
      `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data.usage}`
  };
  if (data.contributing !== '') {
    draftMarkdown +=
    `
  

  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data.contributing}`
  };
  if (data.tests !== '') {
    draftMarkdown +=
      `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data.tests}`

  draftMarkdown +=`
  ## Questions
  
  This is how you can get a hold of me either at my Github account or by email.
  
  GiuHub username: [${data.username}](https://www.github.com/${data.username})
  
  Email: [${data.email}](mailto:${data.email})

  `
  };


  return draftMarkdown;
}

module.exports = generateMarkdown;
