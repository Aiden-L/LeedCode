// Problem: [27. 移除元素](https://leetcode.cn/problems/remove-element/description/)
function removeElement(nums: number[], val: number): number {
    let pointer1 = 0
    let pointer2 = nums.length - 1
    while (pointer1 <= pointer2) {
        if (nums[pointer1] === val) {
            let temp = nums[pointer1]
            nums[pointer1] = nums[pointer2]
            nums[pointer2] = temp

            pointer2--
        } else {
            pointer1++
        }
    }
    return pointer1
}

