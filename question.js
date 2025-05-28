// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// For example, given:
// constnums = [2, 7, 11, 15];
// const target = 9;
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

var getTargetIndex = function (nums, target) {
  if (nums && nums.length == 0) return nums;
  if (!target) return false;

  try {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
      let remainNumber = target - nums[i];

      if (nums[i] + nums[i + 1] === target) {
        return [i, i + 1];
      }
      if (hash[target - remainNumber] !== i)
        if (nums[i] in hash) {
          return [hash[target - remainNumber], i];
        }
      hash[remainNumber] = i;
    }
  } catch (error) {
    return error.message;
  }
};

let answer = getTargetIndex([2, 7, 11, 15], 9);
console.log("Here is the answer : ", answer);
