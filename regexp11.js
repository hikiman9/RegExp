//   * => 0번 이상 반복되는지
//  /a*b/  => a라는 글자가 b 앞에 없어도 되고 n개가 있어도 됨

console.log(/a*b/.test('ab')); //true
console.log(/a*b/.test('bb')); //true
console.log(/a*b/.test('aaaaaaab')); //true
console.log(/a*b/.test('asdfcereb')); //true'
console.log('--------------------------------')

//   + => 1번 이상 반복되는지
//  /a+b/  => a라는 글자가 b 앞에 1번 이상 나오는 지

console.log(/a+b/.test('ab')); // true
console.log(/a+b/.test('bb')); // false
console.log(/a+b/.test('aaaaaaab')); // true
console.log(/a+b/.test('asdfcereb')); // false'
console.log('--------------------------------')


function upper(s) {
    let regexp = new RegExp(/[A-Z]/g);
    let newS = s.replace(regexp, (str) => {
        return "*" + str.toLowerCase() + "-";
    })
    return newS;
}

console.log(upper("ASDFECihgfxjRQEVRQ"));

