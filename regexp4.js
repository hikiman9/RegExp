let s1 = 'phone number of Hong is 010-0123-4567. post number is 123-23';
let regexp = /\d{3}-\d{4}-\d{4}/g; // \d => 숫자  \d{n} n자리 숫자 
console.log(regexp.exec(s1));
// [
//     '010-0123-4567',
//     index: 24,
//     input: 'phone number of Hong is 010-0123-4567. post number is 123-23',
//     groups: undefined
// ]

regexp = /(\d{3})-(\d{4})-(\d{4})/; // \d => 숫자  \d{n} n자리 숫자   () => 그룹화 해줌
console.log(regexp.exec(s1));
// [
//     '010-0123-4567',
//     '010',
//     '0123',
//     '4567',
//     index: 24,
//     input: 'phone number of Hong is 010-0123-4567. post number is 123-23',
//     groups: undefined
// ]

//네이밍 그룹화
console.log("------------------------------------------------------")
regexp = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/; // \d => 숫자  \d{n} n자리 숫자   () => 그룹화 해줌  (?<그룹명>정규식) => 각 그룹에 그룹명 붙여줌
console.log(regexp.exec(s1));
// [
//     '010-0123-4567',
//     '010',
//     '0123',
//     '4567',
//     index: 24,
//     input: 'phone number of Hong is 010-0123-4567. post number is 123-23',
//     groups: [Object: null prototype] { ph1: '010', ph2: '0123', ph3: '4567' }
// ]

let result = regexp.exec(s1);

console.log(result.groups["ph1"])