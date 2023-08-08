let fullName = "Al Numan";
let result = "";
for(let i = 0; i < fullName.length; i++){
    result = result + fullName.charAt(i);

}
console.log(result)

let rev = "";
for(var i = fullName.length - 1; i >= 0; i--){
    rev += fullName.charAt(i);
}
console.log(rev);

//find the String is palindrome or not
const original = "aunt";
let reverse = '';
for(let i = original.length -1; i >= 0; i--){
    reverse += original.charAt(i);
}

let palindrome = true;
for(let i = 0; i< original.length; i++){
    if(original.charAt(i) != reverse.charAt(i)){
        palindrome = false;
    }

}

if(palindrome){
    console.log(original + " is a palindrome String")
}else{
    console.log(original + " is not a palindrome String")
}


//find the first unique character from the String
let str = "I am learning javaScript";
console.log(str.length);
str = str.toLowerCase();

for(let i = 0; i<str.length; i++){
    let unique = true;
    for(let j = i+1; j <str.length; j++){ //(i, ), (i, a), (i,m)----(i,t)
        if(str.charAt(i) == str.charAt(j))
        unique = false;
    

    }
    if(unique){
        console.log(str.charAt(i))
        break;
    }
}

//find the first 10 fibonacci number
//0,1,1,2,3
function fibonacci(){
    let arr = new Array(10);
    for(let i = 0; i < arr.length; i++){// 0,1,2,3,4,5,6,7,8,9
        if(i < 2){
         arr[i] = i; //  0,1,1,2
        }else{
            arr[i] = arr[i - 1] + arr[i -2]//(2-1)=1+(2-2)=0, (3-1)=2+(3-2)=1
        }

    }
    console.log(arr)
}

fibonacci();




