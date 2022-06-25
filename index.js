function sumInput() {
    let arr = [];
    let sum = 0;
    let value = getValue();
    while (parseInt(value, 10)) {
        arr.push(parseInt(value, 10));
        value = getValue();
        console.log(value,' ',typeof(value));
    }
    alert(arr.sort());
}
sumInput();

function getValue() {
    let num = prompt('Введите число');
    return num;
}
