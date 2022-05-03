// 二分法查找
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid];
    if (midValue > target) {
      right = mid - 1;
    } else if (midValue < target) {
      left = mid + 1;
    } else if (midValue === target) {
      return mid;
    }
  }

  return -1;
}

function leftBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid];

    if (midValue > target) {
      right = mid - 1;
    } else if (midValue < target) {
      left = mid + 1;
    } else if (midValue === target) {
      right = mid - 1;
    }
  }

  return left >= nums.length || nums[left] !== target ? -1 : left;
}

function rightBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid];

    if (midValue > target) {
      right = mid - 1;
    } else if (midValue < target) {
      left = mid + 1;
    } else if (midValue === target) {
      left = mid + 1;
    }
  }

  return right < 0 || nums[right] !== target ? -1 : right;
}

console.log(rightBound([1, 2, 2, 2, 3, 4, 5], 2));
