/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.slots = {
        1: big,
        2: medium,
        3: small,
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.slots[carType] > 0){
        this.slots[carType]--;
        return true;
    }
    return false;
};

console.log(ParkingSystem(["ParkingSystem", "addCar", "addCar", "addCar", "addCar"], [[1, 1, 0], [1], [2], [3], [1]]))