/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    // 不需要排序啊，直接用max和min就行啊
    // 神经病版
    // return (salary.reduce((prev, next) => {
    //     return prev + next;
    // }) - Math.min(...salary) - Math.max(...salary)) / (salary.length - 2);
    // 正常版本
    let min = Math.min(...salary), max = Math.max(...salary);
    let sum = salary.reduce((prev, next) => {
        return prev + next;
    });
    return (sum - min - max) / (salary.length - 2);

};
// @lc code=end

