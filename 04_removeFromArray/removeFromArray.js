

const removeFromArray = function(array, ...args) {

    values = [...args];
    console.log(values)
    //check each element of values against array elements

    for(i = 0; i < values.length; i++){
        const value = values[i];

        for(j = 0; j < array.length; j++){
            const element = array[j];


            //remove element from array if it matches value

            if(value == element && typeof(value) == typeof(element)){

                array.splice(j,1);

            }


        }


    }
    return array;


}

// Do not edit below this line
module.exports = removeFromArray;
