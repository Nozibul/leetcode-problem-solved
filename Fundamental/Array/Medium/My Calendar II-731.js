var MyCalendarTwo = function() {
    this.calendar = [];
    this.overlaps = [];
};

MyCalendarTwo.prototype.book = function(start, end) {
    for(let date of this.overlaps){
        if(start < date[1] && end > date[0]) 
            return false;
    }
    for(let date of this.calendar){
        if(start < date[1] && end > date[0]){
            this.overlaps.push([Math.max(date[0], start), Math.min(date[1], end)]);
        }
    }
    this.calendar.push([start, end]);
    return true;
};

// Example usage:
let myCalendar = new MyCalendarTwo();
console.log(myCalendar.book(10, 20)); // true
console.log(myCalendar.book(50, 60)); // true
console.log(myCalendar.book(10, 40)); // true
console.log(myCalendar.book(5, 15)); // false
console.log(myCalendar.book(5, 10)); // true
console.log(myCalendar.book(25, 55)); // true
