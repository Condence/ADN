let arrayMutats = ["AAAA", "TTTT", "CCCC", "GGGG"];
 
 
let secuenciaCount = 0;
function isMutant(array) { 
  
    secuenciaCount= 0;
    return findMutants(array);
}
function checkArray(tmpArray){    
  if(secuenciaCount < 2) {
    for (let index = 0; index < tmpArray.length; index++) {
      for (let index2 = 0; index2 < arrayMutats.length; index2++) {
        if (tmpArray[index].includes(arrayMutats[index2])) { 
          secuenciaCount++;
        }
      }
    }   
  } else {
    return;
  } 
}
function findMutants(array){   
  //Busca Diagonal 1
  findDiagonal(array);  
  //Busca Diagonal 2
  let arrayReverse = reverse(array);
  findDiagonal(arrayReverse);  
  //Busca Vertical
  findVertical(array);  
  //Busca Horizontal
  findHorizontal(array); 
  if(secuenciaCount === 2){
    return true;
  }  else { 
    return false;
  }
}
function findDiagonal(array){
  if(secuenciaCount < 2) { 
    let tmp = "";
    let tmpArray = []; 
    // Mitad Superior
    for (let index = 0; index < array.length; index++) {
      tmp = "";
      for (let index2 = index, index3 = 0; index2 >= 0; index2--, index3++) {
        tmp += array[index2][index3]; 
      }
      tmpArray.push(tmp);
    }
    // Mitad Inferior
    for (let index = 1; index < array[0].length; index++) {
      tmp = "";
      for (let index2 = array.length -1, index3 = index; index3 <  array[0].length; index2--, index3++) {
        tmp += array[index2][index3]; 
      }
      tmpArray.push(tmp); 
    } 
    checkArray(tmpArray); 
  } else {
    return;
  }
} 
function findHorizontal(array) {
  if(secuenciaCount < 2) {
    checkArray(array);
  } else {
    return;
  }
   
}
function findVertical(array) {
  if(secuenciaCount < 2) {
    let tmp = "";
    let tmpArray = [];
    for (let index = 0; index < array.length; index++) {
      tmp = "";
      for (let index2 = 0; index2 < array.length; index2++) {
        tmp += array[index2][index];
      }
      tmpArray.push(tmp);
      
    }
    checkArray(tmpArray);
  } else {
    return;
  }
}  
function reverse(m) {
  return m.map((string) => {
    return string.split("").reverse().join("");
  });
}
 
module.exports = {
    isMutant
}
