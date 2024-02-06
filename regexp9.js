let reg = /cat/;  // let reg = new RegExp(/cat/); 과 같은 문장임

let sent1 = 'I love my cat';
let sent2 = 'I love my dog and Cat';
let sent3 = 'Cat hates cucumber.';

console.log(reg.test(sent1)); // true
console.log(reg.test(sent2)); // false
console.log(reg.test(sent3)); // false
console.log('------------------------------');
console.log('');

reg = /cat/i; // 대소문자 상관 없이

console.log(reg.test(sent1)); // true
console.log(reg.test(sent2)); // true
console.log(reg.test(sent3)); // true
console.log('------------------------------');
console.log('');

reg = /^cat/i; // 패턴으로 시작하는 지

console.log(reg.test(sent1)); // false
console.log(reg.test(sent2)); // false
console.log(reg.test(sent3)); // true
console.log('------------------------------');
console.log('');

reg = /cat$/i; // 패턴으로 끝나는 지

console.log(reg.test(sent1)); // true
console.log(reg.test(sent2)); // true
console.log(reg.test(sent3)); // false
console.log('------------------------------');
console.log('');

reg = /c.t/i; // . => 줄바꿈을 제외한 모~든 문자, 점 개수만큼 카운트

let sent4 = 'I am looking forward to coming back to my CT';

console.log(reg.test(sent1)); // true
console.log(reg.test(sent2)); // true
console.log(reg.test(sent3)); // true
console.log(reg.test(sent4)); // false
console.log('------------------------------');
console.log('');

