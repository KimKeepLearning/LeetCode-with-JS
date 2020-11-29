/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    // hashmap方法 时间o(n),空间o(n)
    // let numMap = {};
    // let res;
    // nums.forEach(e => {
    //     numMap[e]? numMap[e]++: numMap[e] = 1;
    //     if (numMap[e]>1) res = e;
    // });
    // return res;
    // 原地hashmap，时间o(n),空间o(1)
    var len = nums.length;
    for (var i=0; i<len;i++){
        while(i != nums[i]){
            console.log(nums[i],nums[nums[i]]);
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            let temp = nums[i];
            [nums[i], nums[temp]] = [nums[temp],nums[i]];
        }
    }
};