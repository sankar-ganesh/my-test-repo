function apply_expressions(x = 1, y = 1, z = 1) {
    if (x === 1) {
        return (x * y) + (x * z);
    }
    if (y === 1) {
        return (x + y) * (y + z);
    }
    if (z === 1) {
        return (x + z) / (y + z);
    }
}

(function Deduce() {
    const x = 1, y = 2, z = 1;
    console.log('start deduce');
    console.log(apply_expressions(x, y, z));
    console.log(apply_expressions(x, y));
    console.log(apply_expressions(x, z));
    console.log(apply_expressions(x));
    console.log(apply_expressions(y));
    console.log(apply_expressions(y, z));
    console.log(apply_expressions(z));
    console.log('end deduce');
})();
