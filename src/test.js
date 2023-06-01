function* generatorFunction() {
    for (let i = 0; i < 5; i++) {
        yield i;  // ключевое слово используется в JavaScript в функциях-генераторах для возврата значений из функции по одному за раз.
    }
}

const iter = generatorFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

