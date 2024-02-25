/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.splice(index[i], 0, nums[i])
    }
   return res ;
};
const result = createTargetArray([0,1,2,3,4], [0,1,2,2,1]);
console.log(result); // [0,4,1,3,2]



/*
 প্রথম ইটারেশন:

nums[0] হচ্ছে 0 এবং index[0] হচ্ছে 0।
তাই, টার্গেট অ্যারেতে 0 ইনডেক্সে 0 যোগ হবে: [0]
দ্বিতীয় ইটারেশন:

nums[1] হচ্ছে 1 এবং index[1] হচ্ছে 1।
তাই, টার্গেট অ্যারেতে 1 ইনডেক্সে 1 যোগ হবে: [0, 1]
তৃতীয় ইটারেশন:

nums[2] হচ্ছে 2 এবং index[2] হচ্ছে 2।
তাই, টার্গেট অ্যারেতে 2 ইনডেক্সে 2 যোগ হবে: [0, 1, 2]
চতুর্থ ইটারেশন:

nums[3] হচ্ছে 3 এবং index[3] হচ্ছে 2।
তাই, টার্গেট অ্যারেতে 2 ইনডেক্সে 3 যোগ হবে: [0, 1, 3, 2]
পঞ্চম ইটারেশন:

nums[4] হচ্ছে 4 এবং index[4] হচ্ছে 1।
তাই, টার্গেট অ্যারেতে 1 ইনডেক্সে 4 যোগ হবে: [0, 4, 1, 3, 2]
এইভাবেই, প্রদত্ত উদাহরণের জন্য আমরা একটি উত্তর পাচ্ছি: [0, 4, 1, 3, 2]।  
*/

/*  
nums[3] হচ্ছে 3 এবং index[3] হচ্ছে 2।
তাই, টার্গেট অ্যারেতে 2 ইনডেক্সে 3 যোগ হবে: [0, 1, 3, 2]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
*/