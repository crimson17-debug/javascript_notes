let score = 123

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)// Number
console.log(valueInNumber); // NaN

//"33" => 33
//"33avdc" => NaN but type depends on conversion
//true = 1 , false = 0
// null = 0
//undefined = NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 = true;
// 0 = false;
// "" => false;
//"hitesh" => true;


let Number1 = 33

let stringNumber = String(Number1)
console.log(stringNumber);
console.log(typeof stringNumber);


//*******************operations*****************************//

let value = 3
let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " navya"

let str3 = str1 + str2
console.log(str3)


console.log("1"+ 2)
console.log("1"+ "2")
console.log("1"+ "2")
console.log("1" + 2 + 2)
console.log( 2 + 2+ "2")

// the first type of the value will be considered
//=> in 2 + 2 + "1" 2 is int so 2 + 2 = 4 is int but "2" is string so 42
// => in "1" is string so 2 + 2 will be 122 string addition

console.log(true)