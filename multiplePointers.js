var removeElement = function(nums, val) {
    let k = []
    let i = 0;
    while(i < nums.length){
        if(nums[i] === val){
            nums[i] = '-'
        }
        i++
    }
    let j = 0
    while(j < nums.length){
        if(nums[j] !== '-'){
            k.push(nums[j])
        }
        j++
    }
    return k
};

console.log(removeElement([3,2,2,3], 3))