/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
    this.cuisineMap = new Map();

    for (let i = 0; i < foods.length; i++) {
        const cuisine = cuisines[i];
        if (!this.cuisineMap.has(cuisine) || ratings[i] > this.ratings[this.foods.indexOf(this.cuisineMap.get(cuisine))]) {
            this.cuisineMap.set(cuisine, foods[i]);
        }
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const index = this.foods.indexOf(food);
    if (index !== -1) {
        this.ratings[index] = newRating;

        const cuisine = this.cuisines[index];
        if (newRating > this.ratings[this.foods.indexOf(this.cuisineMap.get(cuisine))]) {
            this.cuisineMap.set(cuisine, food);
        }
    }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    return this.cuisineMap.get(cuisine);
};

// Example usage:
const obj = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);

console.log(obj.highestRated("korean")); // Output: "kimchi"
console.log(obj.highestRated("japanese")); // Output: "ramen"

obj.changeRating("sushi", 16);

console.log(obj.highestRated("japanese")); // Output: "sushi"
