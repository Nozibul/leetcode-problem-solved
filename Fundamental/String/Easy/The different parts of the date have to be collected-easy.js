
 function partOfDate(str) {
        const pattern = /(?<day>\d+)[^\w\d]*(?<month>\w+)[^\w\d]*(?<year>\d+)/;
        const match = str.match(pattern);
      
        if (match && match.groups) {
          console.log(match.groups.day);
          console.log(match.groups.month);
          console.log(match.groups.year);
        } else {
          console.log("No match found");
        }
      }
      
      partOfDate("Today's date is 10, January 2024");
      partOfDate("Another date: 15 January 2025");
      
  