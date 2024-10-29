function quicksort(array) {
    if (array.length <= 1) {
        return array; 
    }

    let stack = [];
    stack.push(0); 
    stack.push(array.length - 1); 

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        if (start < end) {
            let pivotIndex = partition(array, start, end);

            if (pivotIndex - 1 > start) {
                stack.push(start);
                stack.push(pivotIndex - 1);
            }
            if (pivotIndex + 1 < end) {
                stack.push(pivotIndex + 1);
                stack.push(end);
            }
        }
    }

    return array;
}

function partition(array, start, end) {
    let pivot = array[end]; 
    let i = start - 1; 

    for (let j = start; j < end; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }

    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    return i + 1; 
}
