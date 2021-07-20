/*Falsy Bouncer*/
function bouncer(arr) {
    let newArray = []
    for(let i= 0; i<arr.length; i++){
      if(arr[i]) {newArray.push(arr[i])}
      }
    return newArray;
    }
  bouncer([7, "ate", "", false, 9])

 /*Chunky Monkey*/
  function chunkArrayInGroups(arr, size) {
    var groups = [];
    while(arr.length > 0){
      groups.push(arr.splice(0, size));
    }
    return groups;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);