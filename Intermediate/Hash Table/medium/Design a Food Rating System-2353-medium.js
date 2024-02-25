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





/*
class Food {
    constructor(foodRating, foodName) {
        this.foodRating = foodRating;
        this.foodName = foodName;
    }

    // Overload the less than operator for comparison
    compareTo(other) {
        if (this.foodRating === other.foodRating) {
            return this.foodName.localeCompare(other.foodName) > 0;
        }
        return this.foodRating < other.foodRating;
    }
}

class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodRatingMap = new Map();
        this.foodCuisineMap = new Map();
        this.cuisineFoodMap = new Map();

        for (let i = 0; i < foods.length; ++i) {
            this.foodRatingMap.set(foods[i], ratings[i]);
            this.foodCuisineMap.set(foods[i], cuisines[i]);

            if (!this.cuisineFoodMap.has(cuisines[i])) {
                this.cuisineFoodMap.set(cuisines[i], []);
            }
            this.cuisineFoodMap.get(cuisines[i]).push(new Food(ratings[i], foods[i]));
        }

        for (const [cuisine, foods] of this.cuisineFoodMap) {
            foods.sort((a, b) => a.compareTo(b));
        }
    }

    changeRating(food, newRating) {
        this.foodRatingMap.set(food, newRating);
        const cuisineName = this.foodCuisineMap.get(food);
        const foods = this.cuisineFoodMap.get(cuisineName);

        for (const foodObj of foods) {
            if (foodObj.foodName === food) {
                foodObj.foodRating = newRating;
                foods.sort((a, b) => a.compareTo(b));
                break;
            }
        }
    }

    highestRated(cuisine) {
        const foods = this.cuisineFoodMap.get(cuisine);
        if (foods.length === 0) {
            return '';
        }

        while (this.foodRatingMap.get(foods[0].foodName) !== foods[0].foodRating) {
            foods.shift();
        }
        return foods[0].foodName;
    }
}

 */