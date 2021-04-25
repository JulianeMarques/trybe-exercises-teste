// exercicio 1.1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices = menu[1];
console.log(menuServices);

// exercicio 1.2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

// exercicio 1.3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');
console.log(menu);

// exercicio 2.1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);
}

// exercicio 2.2

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(names);
}

