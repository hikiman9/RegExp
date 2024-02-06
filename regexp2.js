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

console.log( 'test()', /like/i.test(s) );
console.log( 'exec()', /like/i.exec(s) );
console.log('     ');
console.log("--------------------------------------");
console.log('g 옵션 추가')
console.log('exec(), g옵션 추가', /like/ig.exec(s))
console.log('     ');
console.log("--------------------------------------");
console.log('gm 옵션 추가')
console.log('exec(), gm옵션 추가', /like/igm.exec(s))