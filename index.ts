export const quickSort = (nums: number[]) => {
  const helper = (left: number, right: number) => {
    if (left >= right) {
      return
    }
    const pivot = nums[right]

    let i = left - 1

    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) {
        i++
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }

    ;[nums[i + 1], nums[right]] = [pivot, nums[i + 1]]

    helper(left, i)
    helper(i + 1, right)
  }

  helper(0, nums.length - 1)

  return nums
}
