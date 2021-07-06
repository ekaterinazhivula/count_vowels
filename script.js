let string = prompt('Введите строку');

function vowels(str) {
    let v = "аоиеёэыуюя";
    let count = 0;
    [...str].forEach(letter => {
        if (v.includes(letter))
            ++count;
    });
    return count;
}

function vowels2(str) {
    let v = "аоиеёэыуюя";
    let count = [...str].filter(elem => v.includes(elem)).length;
    return count;
}

function vowels3(str) {
    let v = "аоиеёэыуюя";
    let count = [...str].reduce((count, item) => v.includes(item) ? count + 1 : count, 0);
    return count;
}

console.log(vowels(string));
console.log(vowels2(string));
console.log(vowels3(string));