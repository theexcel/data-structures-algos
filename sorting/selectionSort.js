const arr = [3,2,1,4,6,5,7,9,8,10];

const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }

        if( i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }

    }
}

selectionSort(arr)
console.log(arr)