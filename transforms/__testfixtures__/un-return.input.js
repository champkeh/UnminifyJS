function foo() {
    const a = 1;
    if (a) {
        return a;
    }
    return void 0;
}

const bar = () => {
    return void foo();
}
