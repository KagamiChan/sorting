type SortingMethods = (nums: number[]) => number[]

export const quickSort: SortingMethods = nums => {
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

export const mergeSort: SortingMethods = nums => {
  const helper = (l: number, r: number) => {
    if (r - l <= 1) {
      return
    }

    const mid = Math.floor((l + r) / 2)

    helper(l, mid)
    helper(mid, r)

    const left = nums.slice(l, mid)
    const right = nums.slice(mid, r)

    let i = 0
    let j = 0
    let total = l

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        nums[total] = left[i]
        i++
      } else {
        nums[total] = right[j]
        j++
      }
      total++
    }

    while (i < left.length) {
      nums[total] = left[i]
      i++
      total++
    }

    while (j < right.length) {
      nums[total] = right[j]
      j++
      total++
    }
  }

  helper(0, nums.length)

  return nums
}
