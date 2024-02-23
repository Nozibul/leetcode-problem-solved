/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let arr = Array(n+1).fill(0);

    for(const [i, j] of trust){
        console.log(j);
        arr[i] -= 1;
        arr[j] += 1;
    }
    return arr.lastIndexOf(n-1);
};
console.log(findJudge(3, [[1, 3], [2, 3]]));

/* 
Suppose you have 100,000 components that needs to be rendered in a view. How can you ensure that the scroll in the said view is smooth?

Rendering 100,000 components in a single view can lead to performance issues, especially on devices with limited resources. However, there are several strategies you can employ to ensure that the scroll in the view remains smooth:

Virtualization: Implement virtualization techniques such as windowing or infinite scrolling. This involves rendering only the components that are currently visible on the screen, and dynamically loading additional components as the user scrolls.

Lazy Loading: Load components lazily, i.e., only when they are needed. This can be achieved by splitting the data into smaller chunks and loading them as the user scrolls.

Optimize Rendering: Optimize the rendering process by using techniques like memoization, pure components, or shouldComponentUpdate to minimize unnecessary re-renders.

Use Efficient Data Structures: Use efficient data structures like trees or hash maps to store and access the data. This can improve the performance of searching and filtering operations.

Debounce or Throttle Scroll Events: Use debounce or throttle techniques to limit the number of scroll events that trigger component rendering. This can prevent performance bottlenecks caused by frequent re-renders.

Use CSS Transforms: Use CSS transforms (e.g., translate3d) to animate the scrolling. This can improve the smoothness of the scroll by offloading the rendering to the GPU.

Optimize Images and Media: Optimize images and media files to reduce their size and improve loading times. This can help reduce the overall load on the browser and improve the smoothness of the scroll.

Use Web Workers: Offload heavy computations to Web Workers to prevent blocking the main thread. This can help maintain a smooth scroll by ensuring that the main thread is not overloaded with processing tasks.

Profile and Optimize: Use browser developer tools to profile the performance of your application and identify bottlenecks. Optimize the code and data structures based on the profiling results.

Progressive Loading: Implement progressive loading techniques to load components in batches, prioritizing the components that are most likely to be needed first.

By employing these strategies, you can ensure that the scroll in the view remains smooth even when rendering a large number of components.
*/

/* 
You have prepared a backend that exposes multiple APIs. After some time, you noticed that response time for one of the exposed API has increased to 5 second. Please provide a step-by-step procedure on how you can fix the issue.

When the response time for an API increases, it's essential to diagnose the root cause and implement appropriate solutions. Here's a step-by-step procedure to address the issue:

Identify the Problem: Determine which API is experiencing the slow response time. Analyze the API's performance metrics, such as response time, throughput, and error rate, using monitoring tools like Prometheus, Grafana, or New Relic.

Analyze the Code: Review the code for the API to identify any potential bottlenecks. Look for inefficient algorithms, excessive database queries, or resource-intensive operations.

Database Optimization: If the API interacts with a database, optimize the database queries. Use database indexing, query optimization techniques, and caching mechanisms to improve query performance.

Cache Data: Implement caching mechanisms to cache frequently accessed data. This can reduce the load on the backend and improve response times.

Optimize Network Calls: Minimize the number of network calls made by the API. Combine multiple API calls into a single request, use batch processing, or implement asynchronous processing to reduce latency.

Implement Load Balancing: If the API is hosted on multiple servers, implement load balancing to distribute incoming requests evenly across the servers. This can prevent any single server from becoming overloaded.

Scale the Infrastructure: If the API is experiencing high traffic, consider scaling the infrastructure by adding more servers or upgrading existing servers. This can improve the API's capacity to handle incoming requests.

Implement Rate Limiting: Implement rate limiting to limit the number of requests that can be made to the API within a specific time frame. This can prevent the API from being overwhelmed by a large number of requests.

Monitor and Test: Continuously monitor the API's performance after implementing changes. Use load testing tools like JMeter or Gatling to simulate high traffic and test the API's performance under load.

Review and Iterate: Review the API's performance periodically and iterate on the optimizations as needed. Monitor user feedback and error logs to identify any new issues that may arise.

By following these steps, you can diagnose and address the slow response time for the API, ensuring that it performs optimally and meets the required performance standards.
 */