setTimeout(wakeUpUser, 3000);
// отображение сообщения о скидке через 3 секунды
function wakeUpUser(){
    var price = 1000;
    var discount = 5;
    var total = price - (price * (discount / 100));
    var desc = 'Цена с учетом скидки составляет: ';
    alert(desc + total + " ( " + price + " - " + discount + "% )");
}