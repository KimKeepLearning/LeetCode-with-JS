/*
 * @lc app=leetcode.cn id=1528 lang=javascript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    // 冒泡排序
    // return bubbleSort(indices, s.split('')).join('');

    // 选择排序超时
    // return selectionSort(indices, s.split('')).join('');

    // 插入排序
    return insertSort(indices, s.split('')).join('');
};
var bubbleSort = function (arr,s) {
    var len = arr.length;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                [s[j], s[j + 1]] = [s[j + 1], s[j]];
            }
        }
    }
    return s;
}
var selectionSort = function (arr, s) {
    let len = arr.length;
    let min;
    for (let i = 0; i < len; i++){
        min = i;
        for (let j = i + 1; j < len; i++){
            if (arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
        [s[i], s[min]] = [s[min], s[i]];
    }
    return s;
}

var insertSort = function (arr, s) {
    let len = arr.length;
    let pre, cur, curs;
    for (let i = 1; i < len; i++) {
        pre = i - 1;
        cur = arr[i];
        curs = s[i]
        while (pre >= 0 && arr[pre] > cur) {
            arr[pre + 1] = arr[pre];
            s[pre + 1] = s[pre];
            pre--;
        }
        arr[pre + 1] = cur;
        s[pre + 1] = curs;
    }
    return s;
}

var quickSort = function (arr, left, right) {
    var len = arr.length, partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
}

var partition = function (arr, left, right) {
    var pivot = left, index = pivot + 1;
    for (var i = index; i < right; i++){
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
            index++;
        }
    }
    [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]];
    return arr;
}

// @lc code=end

