/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function (key, message) {

    let newKey = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";

	for (const letter of key) {
        if (letter === ' ') continue;
		if (newKey.includes(letter) === false) newKey += letter;
	}

	for (const letter of message) {
		let index = newKey.indexOf(letter);
		if (index === -1) result += ' ';
		else result += alphabet[index];
	}
	return result;
};
console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"));
// "the five boxing wizards jump quickly"