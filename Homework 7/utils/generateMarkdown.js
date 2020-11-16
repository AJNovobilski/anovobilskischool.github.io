function generateMarkdown(userResponses, userInfo) {

  


  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}


  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}

  `


 

  


  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  
  

 


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  
  
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `

  Email: ${userInfo.email}

  `};

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
