function checkArray(array) {
    let regex = /([ATGC]){6}/;
    let check = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index].length === 6){
            if (regex.test(array[index])) { 
                check++;
            }  
        }       
    } 
    if(check === 6){
        return true;
    } else {
        return false;
    }
}  

module.exports = {
    checkArray
}