// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]




//array 1

const array1 =[3,7,34,90,12];
const lastElement1 = array1[array1.length-1];
console.log(lastElement1);

//array 2
const array2 =[true,"green","where",12,56];
const lastElement2= array2[array2.length-1];
console.log(lastElement2);



//Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];

const myPets = ["Cow","Python","Snake","Dog"];
const joinedString = myPets.join(" ");
console.log(joinedString);

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];


const array3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
array3.sort(function(a, b){
    return a-b;
});
console.log(array3);

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];


const array5 = ["apple","mango","apple","orange","mango","mango"];
const x = [...new Set(array5)];
console.log("The array without duplicates:",x);

const duplicates = array5.filter((item, index) =>array5.indexOf(item)!== index);
console.log("The array of duplicates:", duplicates);



// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];




const array6 =["the","way","x",4,23];
const index = array6.indexOf("4");

if (index !== -1){
    const searchWord = array6[index];
    console.log(searchWord);
}
else{
    console.log("the search word was not found")

}

// Write a JS script to sort the following string
// let word = "lufituaeb"

let word = "lufituaeb";
let nArray = word.split("");
nArray.sort();
let sorted = nArray.join(" ")
console.log(sorted)