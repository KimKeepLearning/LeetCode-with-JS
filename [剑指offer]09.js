var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // 如果对栈没有大小限制的话
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 栈空
    if(!this.stack1.length && !this.stack2.length) return -1;
    if (this.stack2.length) return this.stack2.pop();
    while(this.stack1.length > 1){
        this.stack2.push(this.stack1.pop());
    }
    return this.stack1.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */