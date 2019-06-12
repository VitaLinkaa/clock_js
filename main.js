let clock = document.getElementById('clock');
let color = document.getElementById('color');

function colorClock() {//создаем главную фугнкцию
    let time = new Date(); //навешиваем функцию, для текущего времени
    let h = (time.getHours() % 12).toString(); // компоненты new Date()
    let m = time.getMinutes().toString(); // toString() для того, чтобы мы ммогли использовать (length)
    let s = time.getSeconds().toString();

    // добавляем проверки, если длинна числа > 2, то мы подставляем 0 в ее начало
    // модуль 12 /let h = (time.getHours() % 12).toString();/ нужен, чтобы мы могли использовать 12-часовой формат
    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;// формат цвета
    let colorString = '#' + h + m + s;
    
    clock.textContent = clockString;// изменяем содержимое переменной clock с помощью  textContent
    color.textContent = colorString;

    document.body.style.background = colorString;// меняем фон для body через document 
}
colorClock();
// чтобы страница обновлялася через 1 секунду, вызываем функцию setInterval();ЕЕ параметры, это colorClock() и через сколько обновлять стр 1000ms
setInterval(colorClock, 1000);// вызываем функцию после ее декларации 

