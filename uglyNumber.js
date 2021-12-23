/*
Given an integer n, return whether its prime factors only include 2, 3 or 5.

Constraints

0 ≤ n < 2 ** 31
*/


class Solution {
    solve(n) {
        let factors = [2,3,5]
        factors.forEach((factor) => {
            while (n > 1 && n % factor == 0){
                n = n / factor
            }
        })
        return n == 1
}}
