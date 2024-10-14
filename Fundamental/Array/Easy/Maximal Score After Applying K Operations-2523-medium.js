const maxKelements = function (nums, k, res = 0) {
    const pq = new MaxPriorityQueue();
    for (let num of nums) {
        pq.enqueue(num);
    }

    while (k) {
        const el = pq.dequeue().element;
        res += el;
        pq.enqueue(Math.ceil(el / 3));
        k--;
    }
    return res;
};
console.log(maxKelements([10,10,10,10,10], 5)); // 50