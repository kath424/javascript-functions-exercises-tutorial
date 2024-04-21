// Your code goes here
const rapid = (string) => {
    let strNew = ""
    for(let value of string){
        if(value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u'){
            continue
        }else{
            strNew = strNew + value
        }
    }
    return strNew.toUpperCase()
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
