let num1, num2;

while (true) {
    let choice = prompt(">> выберите действие:\n1. сложение\n2. вычитание\n3. умножение\n4. деление\n5. корень\n6. степень\n7. процент от числа\n8. факториал\n9. выход((( ");
    switch (choice) {
        case "1":
            num1 = prompt("введите первое число: ");
            num2 = prompt("введите второе число: ");
            alert( "результат сложения --> " + (parseFloat(num1) + parseFloat(num2)));
            break;
        case "2":
            num1 = prompt("введите первое число: ");
            num2 = prompt("введите второе число: ");
            alert("результат вычитания --> " + (parseFloat(num1) - parseFloat(num2)));
            break;
        case "3":
            num1 = prompt("введите первое число: ");
            num2 = prompt("введите второе число: ");
            alert("результат умножения --> " + (parseFloat(num1) * parseFloat(num2)));
            break;
        case "4":
            num1 = prompt("введите первое число: ");
            num2 = prompt("введите второе число: ");
            alert("результат деления --> "  + (parseFloat(num1) / parseFloat(num2)));
            break;
        case "5":
            num1 = prompt("введите число: ");
            alert("результат извлечения корня --> " + (Math.sqrt(parseFloat(num1))));
            break;
        case "6":
            num1 = prompt("введите число: ");
            exp = prompt("введите степень, в которую надо возвести число: ");
            alert("результат возведения в степень --> " + (Math.pow(parseFloat(num1), parseFloat(exp))));
            break;
       case "7":
            num1 = prompt("Введите число: ");
            percent = prompt("Введите процент, который нужно найти от числа: ");
            let result = parseFloat(num1) * (parseFloat(percent) / 100);
            let roundedResult = result.toFixed(1);
            alert("результат нахождения процента от числа --> " + roundedResult);
            break;
        case "8":
            num1 = prompt("введите число, от которого надо найти факториал: ");
            let factorial = 1;
            for (let i = 1; i <= parseFloat(num1); i++) {
                factorial *= i;
            }
            alert("факториал от числа --> " + (factorial));
            break;
        case "9":
            process.exit(0);
        default:
            alert("error");
    }
}


