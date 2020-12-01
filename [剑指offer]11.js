/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    // 这是简单？？？
    let low = 0, high = numbers.length - 1, mid;
    while(low < high){
        mid = Math.floor((low + high) / 2);
        
        if (numbers[mid] < numbers[high]) {
            high = mid;
        }else if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        }else if (numbers[mid]===numbers[high]){
            high--;
        }
    }
    return numbers[low];
};