const theArr = [21,8,50,1,4];

const bubbleSort = arr => {
    let swaps;
    for(let i = 0; i < arr.length; i++){
        swaps = false
       for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[ j+ 1] = temp;
                swaps = true;
            }
       }
       if(!swaps) break
    }
    return arr;
}

console.log(bubbleSort(theArr))