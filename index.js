(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clr');
    let equal = document.querySelector('.eql');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.value;
            screen.value += value;
        })
    })
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })
    equal.addEventListener('click', function (e) {
        if (screen.value === "") {
            screen.value = "";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

})();