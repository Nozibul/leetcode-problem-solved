function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) {
     return [1]
    }
    if (rowIndex === 1) {
     return [1, 1]
    }
    
    const prevRes = getRow(rowIndex - 1)
    const res = [];  
 
    for (let i = 0; i <= rowIndex; i++) {
         if (i === 0 || i === rowIndex) {
             res[i] = 1;
         } else { // 1
             res[i] = prevRes[i] + prevRes[i-1]
         }
    }
     return res;
 };
 console.log(getRow(3)); // [1,3,3,1]