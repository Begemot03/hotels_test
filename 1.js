function rightEnding(count, str) {
    let end = "";
    switch(count % 10) {
        case 1: end = ""; break;
        case 2:
        case 3: 
        case 4: end = "а"; break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: end = "ов"; break;
    }

    return `${count} ${str}${end}`;
}

console.log(rightEnding(25, "Компьютер"))
console.log(rightEnding(41, "Компьютер"))
console.log(rightEnding(1048, "Компьютер"))
console.log(rightEnding(22, "Компьютер"))