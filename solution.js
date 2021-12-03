class Solution {
    solve(nums) {
        for (let i=0; i < nums.length; i++){
            console.log(nums[i])
            if (nums[Math.abs(nums[i])] >= 0){
                nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
            } else {
                return Math.abs(nums[i])
            }
        }
    }
}
