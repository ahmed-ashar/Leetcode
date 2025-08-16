// nums = [5,2,11,7,15]  target = 9
var nums = [3,2,4];
var target = 6;
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i , j ];
      }
    }
  }
  return [];
};

twoSum(nums, target);
