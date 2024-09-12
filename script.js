function Mission1(arr) {
    return arr.filter(number => number % 2 === 0);
}


function Mission2(str) {
    let words = str.split(' '); 
    return words.filter(word => word.length === 4).length;
}


function Mission4(arr) {
    let goesUp = true;
    let goesDown = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            goesDown = false;
        } else if (arr[i] < arr[i - 1]) {
            goesUp = false;
        }
    }

    if (goesUp) return 1;     
    if (goesDown) return 2;    
    return 0;                      
}


function Mission5(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];  
    }
    return obj;
}


module.exports = {
    Mission1,
    Mission2,
    Mission4,
    Mission5
};