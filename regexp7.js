// replace() => 바뀐 문자열을 반환함
// replace()의 첫번째 인자로는 바꿀 대상이 되는 패턴, 두번째 인자로는 바꿀 목표가 되는 패턴
// 두번째 인자에는 콜백함수가 들어갈 수 있음. 콜백함수에는 인자가 3개까지 전달됨.
// 콜백함수의 첫번째 인자는 replace()의 첫번째 인자와 같음, 두번쨰 인자는 첫번째 인자의 인덱스, 세번째 인자는 문장 전체 

let s = `
I like star
red star
blue star
I like star
I like cat
I like dog
My dog is pretty
I love my dog
`;

let result1 = s.replace(/like/ig, 'love');

console.log(result1);

console.log("------------------------------------------------------");

let result2 = s.replace(/like/ig, function(a, b, c) {
    console.log("a", a); //찾는 패턴
    console.log("b", b); // 패턴의 인덱스
    console.log("c", c); //문장
    return 'love';
})

console.log('---------------------------------------------------');

console.log(result2);
// a like
// b 3
// c 
// I like star
// red star
// blue star
// I like star
// I like cat
// I like dog
// My dog is pretty
// I love my dog

// a like
// b 34
// c 
// I like star
// red star
// blue star
// I like star
// I like cat
// I like dog
// My dog is pretty
// I love my dog

// a like
// b 46
// c 
// I like star
// red star
// blue star
// I like star
// I like cat
// I like dog
// My dog is pretty
// I love my dog

// a like
// b 57
// c 
// I like star
// red star
// blue star
// I like star
// I like cat
// I like dog
// My dog is pretty
// I love my dog
