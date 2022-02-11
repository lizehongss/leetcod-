
// 冒泡
// O(n^2)
function bubbleSort (array) {
  if (array.length <= 1) return
  var falg = false
  for(var i=0; i<array.length; i++) {
    for(var j= 0; j<array.length-i-1; j++) {
      if( array[j] >array[j+1]) {
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        falg = true
      }
    }
    if(!falg) break
  }
  return array
}
// console.log(bubbleSort([5,7,8,4,1,6,78,45,79]))


// 插入排序
// O(n^2)

function insertion (array) {
  for(var i = 0; i < array.length; i++) {
    var val  = array[i]
    var j = i - 1 
    for (; j>=0; j--) {
      if (array[j] > val) {
        array[j+1] = array[j]
      } else {
        break
      }
    }
    array[j+1] = val
  }
  return array
}
// console.log(insertion([5,7,8,4,1,6,78,45,79]))


// 选择排序
// O(n^2)
// 选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
function selection(array) {
  if(array.length <= 1)  return
  for (var i = 0; i < array.length-1; i++) {
    var minIndex = i
    for(var j = i+1; j< array.length; j++){
      if(array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    const temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}
// console.log(selection([5,7,8,4,1,6,78,45,79]))


// 归并排序
function merge_sort(array) {
  if (array.length <= 1) return array
  var middle = Math.floor(array.length/2)
  return merge(merge_sort(array.slice(0,middle)), merge_sort(array.slice(middle)))
}

function merge(a, b) {
  var temp = []
  var aIndex = 0
  var bIndex = 0
  while(a.length > aIndex && b.length > bIndex) {
    if(a[aIndex] <= b[bIndex]) {
      temp.push(a[aIndex])
      aIndex++
    } else {
      temp.push(b[bIndex])
      bIndex++
    }
  }
  return temp.concat(a.slice(aIndex)).concat(b.slice(bIndex))
}
// console.log(merge_sort([5,7,8,4,1,6,78,45,79]))


// 快速排序
function quick(arr, left, right) { 
  if (left < right) {
    var pivot = right
    var partitonIndex = partition(arr, pivot, left, right)
    quick(arr, left, partitonIndex - 1 < left ? left : partitonIndex - 1)
    quick(arr, partitonIndex + 1 > right ? right : partitonIndex + 1, right)
  }
}
function partition (arr, pivot, left, right) {
  var startIndex = left
  for(var i = left; i< right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr,i, startIndex )
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}
function swap (arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// var testArray = [5,7,8,4,1,6,78,45,79]
// quick(testArray,0, testArray.length - 1)
// console.log(testArray)

//桶排序
function bucket(array, bucketSize) {
  if (array.length < 2 ) return array
  if(!bucketSize) bucketSize = 5
  var bucketArray = createBuckets(array, bucketSize)
  return sortBuckets(bucketArray)

}
function createBuckets(array, size) {
  var minValue = array[0]
  var maxValue = array[0]
  for(var i=0; i<array.length; i++) {
    if(minValue > array[i]) {
      minValue = array[i]
    } else if (maxValue< array[i]) {
      maxValue = array[i]
    }
  }
  // 桶的个数
  var bucketCount = Math.floor((maxValue - minValue)/size) + 1
  // 生成二维数组
  var buckets = []
  for(var i=0; i<size; i++) {
    buckets[i] = []
  }
  // 将array数组数据分发到buckets
  for(var j =0; j< array.length; j++ ) {
    var bucketIndex = Math.floor((array[j]-minValue)/size)
    buckets[bucketIndex].push(array[j])
  }
  return buckets
}
function sortBuckets (array) {
  var sortedArray = []
  for(var i=0; i<array.length; i++) {
    if (array[i] != null) {
      // 插入排序
      var sortedItem = insertion(array[i])
      sortedArray = sortedArray.concat(sortedItem)
    }
  }
  return sortedArray
}
// console.log(bucket([5,7,8,4,1,6,9,15,11,20], 5))

// 计数排序

function counting (array) {
  // 获取最大值, 记录最大值
  var maxValue = array[0]
  for(var i = 0; i< array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  // 定义一个长度为maxvalue+1的数组
  var counts = new Array(maxValue + 1)
  // 计算每个元素的个数，放入到counts桶中
  // counts下标是元素，值是元素个数
  array.forEach(function(item) {
    if(!counts[item]) {
      //  初始化counts[item]
      counts[item] = 0
    }
    // 给counts[item]加值， 为值出现次数
    counts[item] ++
  })
  var sortedIndex = 0
  counts.forEach(function(count,i) {
    // 给array
    while(count > 0) {
      array[sortedIndex] = i
      sortedIndex++
      count--
    }
  })
  return array
}
// console.log(counting([5,7,4,5,3,4,7,5,8,9,7,6]))