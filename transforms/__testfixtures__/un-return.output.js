function foo() {
    const a = 1;
    if (a) {
        return a;
    }
}

const bar = () => {
    foo();
}
