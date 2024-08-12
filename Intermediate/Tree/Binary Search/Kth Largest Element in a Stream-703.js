class KthLargest {
    constructor(k, nums) {
        // set main as min-priority-queue
        this.main = new MinPriorityQueue();
        // set size for compare
        this.size = k;
        
        // loop each num
        for (let num of nums) {
            // transfer add
            this.add(num);
        }
    }

    // method add
    add(val) {
        // set queue as num
        this.main.enqueue(val);

        // if size of main is more than current size
        if (this.main.size() > this.size) {
            // element of main
            this.main.dequeue();
        }

        // element of front
        return this.main.front().element;
    }
}

console.log(new KthLargest(3, [4, 5, 8, 2])); // 4