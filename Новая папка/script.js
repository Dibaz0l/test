var first = + prompt('Ваш бюджет', '');
var second = prompt('Название вашего магазина', '');
mainList = {
    budzet: first,
    name: second,
    goods: [],
    emploers: {},
    open: function(){}
}

mainList.goods[0] = prompt('Какой тип товара будете продавать', '');
mainList.goods[1] = prompt('Какой тип товара будете продавать', '');
mainList.goods[2] = prompt('Какой тип товара будете продавать', '');

document.write('Бюджет на один день ' + mainList.budzet/30);