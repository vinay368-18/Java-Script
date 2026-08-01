let num = 5;
let r = fact(num);
console.log(r);

function fact(n) {
    if (n == 0 || n == 1)
        return 1;
    return n * fact(n - 1);
}

