// Problem: [2908. 元素和最小的山形三元组 I](https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-i/description/)
function minimumSum(nums: number[]): number {
    let sum = 99999999
    for(let i = 0; i<nums.length -2; i++){
        for(let j = i + 1; j<nums.length -1; j++){
            for(let k = j + 1; k<nums.length; k++){
                if(nums[i] < nums[j] && nums[k] < nums[j]){
                    let temp = nums[i] + nums[j] + nums[k]
                    if(temp < sum){
                        sum = temp
                    }
                }
            }
        }
    }
    return sum == 99999999 ? -1 : sum
}
