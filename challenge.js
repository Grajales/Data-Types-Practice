/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log("challenge.js has been included! again");

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber = null;
myFavoriteNumber = 10;

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let letVar = null;
const constNum = 7;
var varVar = null;
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let mathVar = 2;
mathVar = mathVar + 10;
mathVar = mathVar - 4;
mathVar = mathVar * 3;
mathVar = mathVar/7;
mathVar = mathVar % 1;

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
let firstName = "Liliana";
let lastName = "Grajales";
let fullName = firstName + " " + lastName;

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
let hello = "Hello";
let world = "World";
let message = `${hello} ${world}`;

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

/** A. Use loose-equals (==) to create a statement that is false */

1==4;
// Write code here

/** B. Use strict equals (===) to create a statement that is true */
3===3;
// Write code here

/** C. Use strict unequal (!==) to create a statement that is true */
1!==4;
// Write code here

/** D. Use less than (<) to create a statement that is false */
3<3;
// Write code here

/** E. Use greater than (>) to create a statement that is false */
3>3;
// Write code here

/** F. Use less than or equals (<=) to create a statemetn that is true */
3<=3;
// Write code here

/** G. Use greater than or equals (>=) to create a statemetn that is false */
1>=4;
// Write code here

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

/** a _ b; */

// Write code here
a<b;
/** c _ d; */
// Write code here
c>d;
/** 'Name' ___ 'Name'; */

// Write code here
'Name' === 'Name';
/** a _ b ___ c; */

// Write code here
a<b && b<c;
/** a _ a ___ d; */

// Write code here
a==a && a<c;
/** e ___ 'Kevin'; */

// Write code here
e === "Kevin";
/** 48 ___ '48'; */


// Write code here
48 == "48";
/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = "Jelly Bean";

// a _ b;
a>b;
// c _ d;
c>d;
// 'Peanut' ___ 'Peanut';
"Peanut" !== "Peanut";
// a _ b ___ c;
a<b && b<c;
// a _ a ___ d;
a==a && a<c;
// e ___ 'Jelly Bean';
e !== "Jelly Bean";
// 48 ___ '48';
48 ==="48";
/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
let array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"]
];
let array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]]
];
array1[2];
array2[1][1];
array3[1][1][1];
/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ["a", "b", "c", "d", "e"];
let secondToLast = array4.length-2;
array4[secondToLast];
/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ["Thom", 1000, "Christchurch"];
let karolin = ["Karolin", 16, "New York"];
let kristyn = ["Kristyn", 5, "Pittsburgh"];
let cathleen = ["Cathleen", 186, "New York"];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".
thom[0]="Gameboy";

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin[1] =karolin[1]+1;

// Change Cathleen's hometown from New York to "Gotham City".
cathleen[2]= "Gotham City";
// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn[2] = "Oakland";