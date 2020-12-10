/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.auxStack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    let minLen = this.auxStack.length;
    if ( minLen === 0) {
        this.auxStack.push(x);
    } else {
        let minNum = this.auxStack[minLen - 1];
        if ( minNum > x) {
            this.auxStack.push(x);
        } else {
            this.auxStack.push(minNum);
        }
    }
    // console.log(this.stack);
    // console.log(this.auxStack);
        
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.auxStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // console.log(this.auxStack)
    return this.auxStack[this.auxStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

