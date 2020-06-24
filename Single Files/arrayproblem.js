reverse = ["a", "b", "c"]

function printReverse(reverse) {
    for (let i = reverse.length - 1; i >= 0; i--) {
        console.log(reverse[i])
    }
}
//////////////////////////////////////////////////////////////

var uni = [1, 1, 1, 1]

function isUniform(uni) {
    var first = uni[0]

    for (let i = 0; i < uni.length; i++) {
        if (uni[i] !== first) {
            return false
        }
        return true
    }
}
///////////////////////////////////////////////////////////////////////
sums = [1, 2, 3, 4]

function sumArray(sums) {
    sum = 0

    sums.forEach(function (i) {
        sum += i
    })
    console.log(sum)
}

max_array = [10, 3, 10, 4]

function max(max_array) {
    var max_num = max_array[0]

    max_array.forEach(function (i) {
        if (i > max_num) {
            max_num = i
        }
    })
    console.log(max_num)
}