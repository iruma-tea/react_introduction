const list = [10, 20, 30];
const [x, y, z] = list;
console.log(x, y, z); // 10 20 30

const [a, b] = list;
console.log(a, b); // 10 20

const [l, m, n, o] = list;
console.log(l, m, n, o); // 10 20 30 undefined

const [p, , r] = list;
console.log(p, r); // 10 30
