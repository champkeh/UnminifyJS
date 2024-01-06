a();
b();
c();

() => {
    a();
    b();
    return c();
}

function foo() {
    a();
    return b();
}

a();

throw b()

a();
b();

if (c()){}

a();
b();

switch (c()){}

a();
b();

for (; c(); ) {
    d();
    e();
}

a();
b();

for (let x = (c()), y = 1; x < 10; x++) {}

a();
b();

let x = (c())
