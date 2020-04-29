// 简单二分查找
function biaryFind (arr, target) {
  if( arr.length === 0 ) return -1
  var low = 0
  var hight = arr.length - 1
  while(low <= hight) {
    var mid = Math.floor((hight+low)/2)
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      hight = mid -1
    } else {
      low = mid + 1
    }
  }
  return -1
}
// console.log(biaryFind([1,2,3,4,5,6,7,8,9], 1))

//查找第一个值等于给定值的元素
function searchFirstVal (arr, target) {
  if (arr.length === 0) return -1
  var low = 0
  var hight = arr.length - 1
  while(low <= hight) {
    var mid = Math.floor((hight+low)/2)
    if (target < arr[mid]) {
      hight = mid - 1
    } else if (target > arr[mid]) {
      low = mid + 1
    } else {
      if (mid === 0 || arr[mid-1]!= target) return mid
      else hight = mid - 1
    }
  }
  return -1
}
// console.log(searchFirstVal([1,2,3,5,5,5,7,8,9], 5))

// 查找最后一个值等于给定值的元素
function searchLastVal (arr, target) {
  if (arr.length === 0) return -1
  var low = 0
  var hight = arr.length - 1
  while(low <= hight) {
    var mid = Math.floor((hight+low)/2)
    if (target < arr[mid]) {
      hight = mid - 1
    } else if (target > arr[mid]) {
      low = mid + 1
    } else {
      if (mid === arr.length - 1 || arr[mid+1]!= target) return mid
      else low = mid + 1
    }
  }
  return -1
}
// console.log(searchLastVal([1,2,3,5,5,5,7,8,9], 5))

// 查找第一个大于等于给定值的元素
function bsearch1 (arr, target) {
  if (arr.length === 0) return -1
  var low = 0
  var hight = arr.length - 1
  while(low <= hight) {
    var mid = Math.floor((hight+low)/2)
    if (target < arr[mid] || target === arr[mid]) {
      if((mid===0) || arr[mid-1] < target) return mid
      else hight = mid -1
    } else  {
      low = mid + 1
    }
  }
  return -1
}
// console.log(bsearch1([1,2,3,4,5,6,7,8,9], 5))

// 查找最后一个小于等于给定值的元素
function bsearch2 (arr, target) {
  if(arr.length === 0) return -1
  var low = 0
  var hight = arr.length - 1
  while(low <= hight) {
    var mid = Math.floor((hight+low)/2)
    if (target> arr[mid] || target === arr[mid]) {
      if ((mid === arr.length -1) || arr[mid+1] > target) return mid
      else low = mid + 1
    } else {
      hight = mid -1
    }
  }
  return -1
}
// console.log(bsearch2([3,5,6,8,9,10], 7))