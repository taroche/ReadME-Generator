// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-red)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let renderedLicense = renderLicenseBadge(license)
  let renderedLink = renderLicenseLink(license)
  return `## License
  
  This is my License. There are many like it, but this one is mine

  ${renderedLicense}${renderedLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftToC = `## Table of Contents`;
  let licenseSection;
  if(data.license) {
    licenseSection = renderLicenseSection(data.license)
  } else {
    licenseSection = "No license data provided."
  }
  if (data.installation !== '') {
    draftToC += `
  * [Installation](#installation)` };

  if (data.usage !== '') {
    draftToC += `
  * [Usage](#usage)` };

  if (data.contributing !== '') {
    draftToC += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') {
    draftToC += `
  * [Tests](#tests)` };

  let draftMarkdown =
    `# ${data.title}

    
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${data.description}
  `

  draftMarkdown += draftToC;


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
  

  ${licenseSection}

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
