// 문장에서 휴대폰 번호만 찾기

let s1 = `
홍길동 010-2609-6254,
김태균 010-2933-7231,
신문규 010-2354-1854,
오주원 010-7128-2881,
eqoifhqiweuhqwiulfqenl
`

let regexp = /\d{3}-\d{4}-\d{4}/g;

let result = s1.match(regexp);

console.log(result);