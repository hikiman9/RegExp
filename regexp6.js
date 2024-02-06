// search() 문자열 함수, 찾아서 인덱스를 반환
// 첫 번째것만 찾음. 없으면 -1 반환

let s1 = `
홍길동 010-2609-6254,
김태균 010-2933-7231,
신문규 010-2354-1823,
오주원 010-7128-2881,
eqoifhqiweuhqwiulfqenl
`

let regexp = /\d{3}-\d{4}-\d{4}/g;

let result = s1.search(regexp);

console.log(result);