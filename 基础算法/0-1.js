// weight:物品重量，n:物品个数，w:背包可承载重量

function knapsack () {
    let states  = new Array(w+1)
    states[0] = true
    if (weight[0] <=w) {
        states[weight[0]] = true
    }
    for(let i =1; i<n; i++) {
        for(let j = w-weight[i]; j>=0; --j) {
            if(states[j] == true) states[j+weight[i]] = true
        }
    }
    for(let i = w; i>=0; --i) {
        if(states[i] == true) return i
    }
    return 0
}