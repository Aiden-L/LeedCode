// 思路：只维护当前的最小值，每次入栈时判断是否比当前最小值小，如果小则入栈，否则入栈之前的最小值，pop的时候两个stack同时pop

var MinStack = function() {
    this.stack = []
    this.minstack = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    let cur_min = this.minstack[this.minstack.length -1]
    this.minstack.push(val<cur_min?val:cur_min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minstack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */