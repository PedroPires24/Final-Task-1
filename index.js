//1
function multiply_it() {
    var val = 5;
    var result = 0;
    return function (arg) {
        result = val * arg;
        return result;
    }
}

/* To test the first exercise uncomment the next 2 lines of code
var use_of_closures = multiply_it();
console.log(use_of_closures(7));
*/

//2
 function sum_of_array(array) {
    let sum = 0;
    for (let i = 0; i< array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
 }

 //3
function flatt_arr(arr,result) {
    let temp = result;
    for (let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) flatt_arr(arr[i],temp);
        else temp.push(arr[i]);
    }
    return temp;
}

 //4
 function compare_arrays_equal(array_1, array_2) {
    let matches = [];
    let j = 0;
    for (let i = 0; i < Math.min(array_1.length,array_2.length); i++) {
        if(array_1.includes(array_2[i])) {
            matches[j] = array_2[i];
            j++;
        }
    }
    return matches;
 }

 //5
 function compare_arrays_diff(array_1, array_2) {
     let diffs = [];
     let j = 0;
     if(array_1.length >= array_2.length) {
        for (let i = 0; i < array_1.length; i++) {
            if(!array_2.includes(array_1[i])){
                if(!diffs.includes(array_1[i])) {
                    diffs[j] = array_1[i];
                    j++;
                }
            }
        }
    }else {
        for (let i = 0; i < array_2.length; i++) {
            if (!array_1.includes(array_2[i])) {
                if (!diffs.includes(array_2[i])) {
                    diffs[j] = array_2[i];
                    j++;
                }
            }
        }
    }
    return diffs;
 }

 //6
 function array_of_tuples(array_1, array_2) {
    let tuple = [];

    for (let i = 0; i < Math.min(array_1.length, array_2.length); i++)  tuple[i] = [array_1[i], array_2[i]];

    return tuple;

 }

 //7
 function find_path_value(array, path) {
    
    if(path[array[0]] === undefined) return undefined;

    let temp = path[array[0]];

    for (let i = 1; i < array.length; i++) {

        if(temp[array[i]] === undefined) return undefined;

        if(typeof temp[array[i]] === 'string') {
            if(array[i+1] !== undefined) return undefined;
            return temp[array[i]];
        }
        temp = temp[array[i]];
    } 

 }


 //8
 function compare_for_equality(obj1, obj2) {

     if (! (Object.keys(obj1).length === Object.keys(obj2).length)) return false;
     for ( let i = 0; i < Object.keys(obj1).length; i++) {

         if(Object.keys(obj2).includes(Object.keys(obj1)[i]))  {
            if(!(obj2[Object.keys(obj1)[i]] === obj1[Object.keys(obj1)[i]])) return false;
            else return false;
         }
     }
     return true;
 }

 //9
 function array_without_keys(array,obj) {
     temp = {}
     for (let i = 0; i < Object.keys(obj).length; i++) {
        if(array.indexOf(Object.keys(obj)[i]) === -1) {
            temp[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
        }
     }
     return temp;
     

 }