const leapYears = function(year) {

    //check if div by 4
    if(year % 4 == 0){

        //check if div by 400
        if(year % 400 == 0){
            return true;
        }
        else if(year % 100 == 0){
            return false;
        }
        else{
            return true;
        }

    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
