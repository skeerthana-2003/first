
//
//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. Examples toArray({ a: 1, b: 2 }) ? [["a", 1], ["b", 2]] toArray({ tesla: 12, tats: 112 }) ? 
//[["tesla", 12], ["tats", 112]] toArray({}) ? []


function toArray(obj){
    let result=[];
    for(let key in obj){
        let newArray = [key,obj[key]]
        result.push(newArray)
    }
    return result;
}
console.log(toArray({a:1,b:2}))
console.log(toArray({tesla:12,tats:112}))