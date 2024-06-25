/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    // Paso #1
    const listadoUnidad = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const listadoDecena = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const listadoCentena = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const listadoMillar = ["", "M", "MM", "MMM"];

    // Paso #2
    const millar  = Math.floor(num / 1000);
    const centena = Math.floor((num % 1000) / 100);
    const decena  = Math.floor((num % 100) / 10);
    const unidad  = num % 10;

    // Paso #3
    const millarRomana = listadoMillar[millar];
    const centenaRomana = listadoCentena[centena];
    const decenaRomana = listadoDecena[decena];
    const unidadRomana = listadoUnidad[unidad];

    // Paso #4
    return millarRomana + centenaRomana + decenaRomana + unidadRomana;

};
 
console.log(intToRoman(3749)); // "MMMDCCXLIX"
