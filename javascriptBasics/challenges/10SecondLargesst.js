function secondLargeAndSmall(arr) {
    if (arr.length == 0) {
        return `array must need 2 elements`
    } else if (arr.length == 1) {
        return arr
    }
    else if (arr.length == 2) {
            if (arr[0] < arr[1]) {
                return [arr]
            }
            return [arr[1], arr[0]]
        } else {
            let min1 = Infinity
            let min2 = Infinity
            let max1 = -Infinity
            let max2 = -Infinity
            for (let val of arr) {
                if (val < min1) {
                    min2 = min1
                    min1 = val
                } else if (val < min2 && val != min1) {
                    min2 = val
                }
                if (val > max1) {
                    max2 = max1
                    max1 = val
                } else if (val > max2 && val != max1) {
                    max2 = val
                }
            }
            return [min2, max2]
        }
}

// let arr=[134,43,65,2,6,1,6]
// let arr = [2, 1]
let arr=[1]

let res = secondLargeAndSmall(arr)
console.log(res);