let s1 = `
홍길동 010-2609-6254,
김태균 010-2933-7231,
신문규 010-2354-1854,
오주원 010-7128-2881
`

let regexp = new RegExp(/\d{3}-\d{4}-\d{4}/g);

let result = s1.replace(regexp, function(item, index) {
    console.log(item);
    console.log(index);
    return item;
});

// 010-2609-6254
// 5
// 010-2933-7231
// 24
// 010-2354-1854
// 43
// 010-7128-2881
// 62

regexp = new RegExp(/(\d{3})-(\d{4})-(\d{4})/g);
result = s1.replace(regexp, '$1$2$3'); // 위에 그룹화한 걸 묶기.
console.log(result);

// 홍길동 01026096254,
// 김태균 01029337231,
// 신문규 01023541854,
// 오주원 01071282881