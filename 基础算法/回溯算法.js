// 四皇后算法
var  result = []
function cal8queens(row) {
  if (row === 4) {
    console.log(result)
    return
  }
  for (let column = 0 ; column < 4; column ++) {
    if (isOk(row, column)) {
      console.log(row, column)
      result[row] = column;
      cal8queens(row + 1)
    }
  }
}
function isOk(row, column) {
  let leftUp = column -1
  let rightUp = column +1
  for (let i = row -1; i>=0; i--) {
    if (result[i] === column) return false
    if (leftUp >= 0) {
        if (result[i] === leftUp) return false
    }
    if (rightUp < 4) {
      if (result[i] === rightUp) return false
    }
    --leftUp
    ++rightUp
  }
  return true
}

cal8queens(0)

// 0-1 背包
let  maxW
// i表示考察到哪个物品
// cw表示已经装进去的物品总重量
// items表示每个物品的重量
// n表示物品个数
// w背包重量
function f(i, cw, items, n,w) {
  if (cw === n || i === n) {
    if (cw > maxW) maxW = cw
    return
  }
  f(i+1, cw, items,n, w)
  if (cw + items[i] <= w) {
    f(i+1, cw + items[i],items,n,w)
  }
}

