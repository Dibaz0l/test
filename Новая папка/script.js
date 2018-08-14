var first = + prompt('Ваш бюджет', '');
var second = prompt('Название вашего магазина', '');
mainList = {
    budzet: first,
    name: second,
    shopGoods: [],
    emploers: {},
    open: function(){}
}

mainList.shopGoods[0] = prompt('Какой тип товара будете продавать', '');
mainList.shopGoods[1] = prompt('Какой тип товара будете продавать', '');
mainList.shopGoods[2] = prompt('Какой тип товара будете продавать', '');

document.write('Бюджет на один день ' + mainList.budzet/30);
document.write(mainList);

