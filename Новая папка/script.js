let budget = prompt('Какой Ваш бюджет', '');
let name = prompt('Название вашего магазина?', '');

mainList = {
    budjet : budget,
    name : name,
    shopGoods : [],
    employers : {},
    open
}

mainList.shopGoods[0] = prompt('Какой товар будете продавать', '');
mainList.shopGoods[1] = prompt('Какой товар будете продавать', '');
mainList.shopGoods[2] = prompt('Какой товар будете продавать', '');

document.write('бюджет на 1 день: ' + mainList.budjet/30);