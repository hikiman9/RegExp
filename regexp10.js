// 대괄호 => 대괄호 안의 문자 중 하나라도 맞으면~


console.log(/[KkCc]/.test('korean')); // true
console.log(/[KkCc]/.test('Korean')); // true
console.log(/[KkCc]/.test('corean')); // true
console.log(/[KkCc]/.test('Corean')); // true
console.log(/[KkCc]/.test('acb')); // true
console.log(/[KkCc]/.test('aKbewx')); // true
console.log(/[KkCc]/.test('3489hpq9pen')); // false
console.log('----------------------------------------')

// /^[패턴]/ 패턴 중 하나로 시작하는가.

console.log(/^[KkCc]/.test('korean')); // true
console.log(/^[KkCc]/.test('Korean')); // true
console.log(/^[KkCc]/.test('corean')); // true
console.log(/^[KkCc]/.test('Corean')); // true
console.log(/^[KkCc]/.test('acb')); // false
console.log(/^[KkCc]/.test('aKbewk')); // false
console.log('----------------------------------------')

// /[패턴]$/ 패턴 중 하나로 끝나는가

console.log(/[KkCc]$/.test('korean')); // false
console.log(/[KkCc]$/.test('Korean')); // false
console.log(/[KkCc]$/.test('corean')); // false
console.log(/[KkCc]$/.test('Corean')); // false
console.log(/[KkCc]$/.test('acb')); // false
console.log(/[KkCc]$/.test('aKbewk')); // true
console.log('----------------------------------------')


//  /a[0-9]b/ => a와 b 사이에 아무 숫자나 하나 있는가
//  /a[^0-9]b/ => 숫자가 아닌~      [^패턴] vs ^[패턴] 구분 잘해야댐

console.log(/a[0-9]b/.test('a4bdffw')); // true
console.log(/a[0-9]b/.test('a4234bdffw')); // false
console.log(/a[0-9][0-9][0-9][0-9]b/.test('a4234bdffw')); // true
console.log(/a[^0-9]b/.test('a4bdffw')); // false
console.log(/a[^0-9]b/.test('a4234bdffw')); // false
console.log(/a[^0-9]b/.test('atbdffw')); // true
console.log(/a[^0-9]b/.test('at23fcbdffw')); // false

console.log('----------------------------------------')

//  [^0-9] => 문자가 하나라도 포함됨
console.log(/[^0-9]/.test('1wwfr43')); // true
console.log(/[^0-9]/.test('23451143')); // false
