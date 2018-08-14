var money = + prompt('Ваш бюджет', '');
var name = prompt('Название вашего магазина', '');
var time = 19;
mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    emploers: {},
    open: false
}

for(let i = 0; i < 5; i++){
    if((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50){
        mainList.shopGoods[i] = prompt('Какой тип товара будете продавать');
    } else {
        mainList.shopGoods[i] = prompt('Какой тип товара будете продавать');
    }
}

if(time < 0){
    console.log('такого просто не может быть');
    } else if(time > 8 && time < 20) {
    console.log('Время работать');
        } else if(time < 24){
    console.log('Уже слишком поздно');
            } else {
                console.log('В сутках только 24 часа');
            }

document.write('Бюджет на один день ' + mainList.budget/30);
console.log(mainList);

