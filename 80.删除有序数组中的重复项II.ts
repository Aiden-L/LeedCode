// > Problem: [80. 删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/)
function removeDuplicates(nums: number[]): number {
    let uni_set = {}
    for (let i=0;i<nums.length;i++){
        if(nums[i] in uni_set){
            uni_set[nums[i]] += 1
            if(uni_set[nums[i]] > 2){
                nums.splice(i,1)
                i--
            }
        }else{
            uni_set[nums[i]] = 1
        }
    }
    return nums.length
}

// better solution
function removeDuplicates2(nums: number[]): number {
    let fast = 2
    let slow = 2
    while(fast<nums.length){
        if (nums[fast] != nums[slow-2]){
            nums[slow] = nums[fast]
            slow ++
        }
        fast ++
    }
    return slow
}
