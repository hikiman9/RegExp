//여러 번 등장하는 요소를 찾을 땐 match()를 사용
// 문자열.match(정규식)
// match()는 정규식 객체의 메소드가 아니라 문자열 객체의 메소드임.
// 인자로 정규식(리터럴)을 받는다
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


console.log('### match() 함수 ### 문자열.match(정규식) ###');
let result = s.match(/like/ig);
console.log(result); // [ 'like', 'like', 'like', 'like' ]  => g 옵션이 붙어야 전체에서 해당 문자열이 몇 번 등장하는 지 알 수 있음
console.log(result.length); // 4