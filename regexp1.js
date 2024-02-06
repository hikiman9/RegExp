//test 함수 -> 정규식 함수, 정규식 객체에 있는 함수
//패턴 존재 유무만 판단한다.

let s1 = 'I like star';
let s2 = 'Like you';
let s3 = "I don't like";

let regexp = new RegExp(/like/);

console.log('/like/');
console.log(s1, regexp.test(s1));
console.log(s2, regexp.test(s2)); //대소문자가 섞여서 false로 나옴
console.log(s3, regexp.test(s3));
console.log('------------------------------------------------')

regexp = new RegExp(/like/i); // i => 대소문자 상관 없이

console.log('/like/i');
console.log(s1, regexp.test(s1));
console.log(s2, regexp.test(s2)); 
console.log(s3, regexp.test(s3));
console.log('------------------------------------------------')

regexp = new RegExp(/^like/i); // i => 대소문자 상관 없이, ^ => ~로 시작하는

console.log('/^like/i');
console.log(s1, regexp.test(s1));
console.log(s2, regexp.test(s2)); 
console.log(s3, regexp.test(s3));
console.log('------------------------------------------------')

regexp = new RegExp(/like$/i); // i => 대소문자 상관 없이, $ => ~로 끝나는지

console.log('/like$/i');
console.log(s1, regexp.test(s1));
console.log(s2, regexp.test(s2)); 
console.log(s3, regexp.test(s3));
console.log('------------------------------------------------')


// exec 함수 => test()와 다르게 패턴에 해당하는 정보를 배열 형태로 전달
// 해당 패턴에 일치하는 게 없으면 null 반환
// 있으면 일치하는 단어와 그 인덱스, 입력문장, groups를 반환


regexp = new RegExp(/like$/i); // i => 대소문자 상관 없이, $ => ~로 끝나는지

console.log('/like$/i');
console.log(s1, regexp.exec(s1)); //null
console.log(s2, regexp.exec(s2)); //null
console.log(s3, regexp.exec(s3)); //[ 'like', index: 8, input: "I don't like", groups: undefined ]
console.log('------------------------------------------------')