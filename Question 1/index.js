function dividebytwo(arr, f) { 
    let newArr = []; 
    newArr  = arr.filter(isEven);
 return newArr
}

function isEven(value) {
    return value % 2 == 0;
  }


function mergeTwoArr(arr1,arr2) {
    let array3 = arr1.concat(arr2);
    array3 = array3.filter((item,index)=>{
       return (array3.indexOf(item) == index)
    })
    return array3
  }