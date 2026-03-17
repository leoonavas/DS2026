var dinos = ["Tiranossauro", "Velociraptor", "Tricerátopo", "Braquiossauro"];
// Acima criamos uma table (array), que contém strings com nome de dinossauros

// Podemos acessar os elementos do array com:
console.log(dinos); // Tiranossauro

// Podemos acessar os elementos do array com:
console.log(dinos[0]); // Tiranossauro

// Ver quantos elementos tem na array
console.log(dinos.length); // 4

dinos.push("Pterodáctilo"); // Adiciona um elemento no final da array
console.log(dinos); // ["Tiranossauro", "Velociraptor", "Tricerátopo", "Braquiossauro", "Pterodáctilo"]

dinos.unshift("Anquilossauro"); // Adiciona um elemento no início da array
console.log(dinos); // ["Anquilossauro", "Tiranossauro", "Velociraptor", "Tricerátopo", "Braquiossauro", "Pterodáctilo"]