let field = "011100110110001";
for (let i = 4; i <= 20; i++) {
    field = field + "1" + Array.from(field, v => v == "0" ? "1" : "0").reverse().join("");
}

function findKthBit(n: number, k: number): string {
    return field[k - 1];
};
console.log(findKthBit(3, 1)); // "0"