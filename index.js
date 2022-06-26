function sumInput() {
    let arr = [];
    let value = getValue();
    while (parseInt(value, 10)) {
        arr.push(parseInt(value, 10));
        value = getValue();
        console.log(value,' ',typeof(value));
    }
    alert(arr.sort());
    let result = arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    alert(result);
}
sumInput();

function getValue() {
    let num = prompt('Введите число');
    return num;
}
