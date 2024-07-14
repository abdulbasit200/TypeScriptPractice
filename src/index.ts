console.log('Hello World');
// Declaring in TypeScript.
let age: number = 20;
if (age < 50)
    age += 10;
console.log('Age after addition of 10: ', age);

// DataTypes in TypeScript
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published = true;
let level; // Type: any
function render(discription: string, document: any){
    console.log(discription + ': ' + document)
}
render('Value in number Data Types', sales);
render('Value in string Data Types', course);
render('Value in boolean Data Types', is_published);

// Arrays in TypeScript
let number: number[] = [1, 2, 3];
render('Value in array Data Types', number);

// Tuple(fixed length Array) in TypeScript
let user: [number, string] = [1, '2'];
render('Value in tuple Data Types', user);

// Enums(List of related constants)
// const small = 1;
// const medium = 2;
// const large = 3;
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Small;
render('Sizes Available', '');
console.log(Size)
render('Size selected', mySize);