const sumAll = function(start, end) {
    var sum = 0

    //returns ERROR if negative/non number paramaters

    if(start < 0 || end < 0){
        return "ERROR";
    }

    if(typeof(start) !== "number" || typeof(end) !== "number"){
        return "ERROR";
    }


    if(start == end){
        return start + end
    }
    else if (start > end){
        // swap start/end
        for(counter = end; counter <= start; counter++){
            sum += counter;

        }
    }
    else{
        //expected defaut order. Sum from Start-end

        for(counter = start;counter <= end; counter++){
            sum += counter;
        }
    }


    return sum;

};

// Do not edit below this line
module.exports = sumAll;
