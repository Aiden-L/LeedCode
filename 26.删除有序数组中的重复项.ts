// > Problem: [26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/)
function removeDuplicates(nums: number[]): number {
    let uni_set = {}
    for (let i=0;i<nums.length;i++){
        if(nums[i] in uni_set){
            uni_set[nums[i]] += 1
            nums.splice(i,1)
            i--
        }else{
            uni_set[nums[i]] = 1
        }
    }
    return nums.length
}
// better

function removeDuplicates2(nums: number[]): number {
    let fast = 1
    let slow = 1
    while(fast<nums.length){
        if (nums[fast] != nums[slow-1]){
            nums[slow] = nums[fast]
            slow ++
        }
        fast ++
    }
    return slow
}