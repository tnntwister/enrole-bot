const { v4: uuidv4 } = require('uuid');


function generateDocumentId() {
    let id = uuidv4().replace(/-/g, '').substring(0, 36);

    // Assurez-vous que l'ID ne commence pas par un caractère spécial
    if (!/^[a-zA-Z0-9]/.test(id)) {
      id = 'a' + id.substring(1);
    }
  
    return id;
}

/*
function anotherHelperFunction() {
// Votre code ici
}*/

module.exports = {
    generateDocumentId,
    // anotherHelperFunction
  };