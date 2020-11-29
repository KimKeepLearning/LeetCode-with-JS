/**
 * 题目二：不修改数组找出重复的数字
 * 在一个长度为n+1的数组里，所有数字范围都在1~n，因此至少有一个数字是重复的。
 * 找出数组中任意一个重复的数组，且不许修改数组
 */

var getDuplication = function (nums) {
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let count = countRange(nums, low, mid);

        if (high == low) {
            if (count > 1) return low;
            else break;
        }
        if (count > (mid - low + 1)) high = mid;
        else low = mid + 1;
    }
    return -1;
};

var countRange = function (nums, low, mid) {
    let count = 0, len = nums.length;
    for (let i = 0; i < len; i++){
        if (nums[i] >= low && nums[i] <= mid) {
            count++;
        }
    }
    return count;
}