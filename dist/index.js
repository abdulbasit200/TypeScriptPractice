"use strict";
console.log('Hello World');
let age = 20;
if (age < 50)
    age += 10;
console.log('Age after addition of 10: ', age);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(discription, document) {
    console.log(discription + ': ' + document);
}
render('Value in number Data Types', sales);
render('Value in string Data Types', course);
render('Value in boolean Data Types', is_published);
let number = [1, 2, 3];
render('Value in array Data Types', number);
let user = [1, '2'];
render('Value in tuple Data Types', user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
render('Sizes Available', '');
console.log(Size);
render('Size selected', mySize);
//# sourceMappingURL=index.js.map