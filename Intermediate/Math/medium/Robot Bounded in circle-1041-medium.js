/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0, y = 0;  // Initial position of the robot
    let direction = 0;  // Initial direction (0 represents north)

    for (let instruction of instructions) {
        console.log(instruction);
        if (instruction === "G") {
            if (direction === 0) {
                y++;  // Move north
            } else if (direction === 1) {
                x++;  // Move east
            } else if (direction === 2) {
                y--;  // Move south
            } else {
                x--;  // Move west
            }
        } else if (instruction === "L") {
            direction = (direction + 3) % 4;  // Turn 90 degrees to the left
        } else if (instruction === "R") {
            direction = (direction + 1) % 4;  // Turn 90 degrees to the right
        }
    }

    // The robot is in a circle if it returns to the initial position or if it is facing a direction other than north
    return (x === 0 && y === 0) || direction !== 0;
}

// Example usage:
console.log(isRobotBounded("GL"));  // Output: true
console.log(isRobotBounded("GG"));  // Output: false
console.log(isRobotBounded("GGLLGG"));  // Output: true
