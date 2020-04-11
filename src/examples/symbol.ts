// 基础
const s1 = Symbol();
console.log(s1)

const s2 = Symbol();
console.log(s2);

const s3 = Symbol('mzn')
console.log(s3);

const s4 = Symbol('mzn');
console.log(s4.toString())
console.log(Boolean(s4)) // true
console.log(!s4) // false
// const s5 = Symbol({a: 'ee'})

// 属性名
let prop = 'name';
const info = {
    [prop]:'mzn'
}
// console.log(info)

const s5 = Symbol('name');
const info2 = {
    [s5]:'mzn',
    age: 4
}
for(const key in info2) {
    console.log(key) // 获取不到Symbol 属性
}

console.log(Object.keys(info2)) // 获取不到Symbol 属性

console.log(Object.getOwnPropertyNames(info2))// 获取不到Symbol 属性

console.log(JSON.stringify(info2))

console.log(Object.getOwnPropertySymbols(info2));
console.log(Reflect.ownKeys(info2))

// symbol.for 

const s6 = Symbol('mzn');
const s7 = Symbol.for('a');
const s8 = Symbol.for('a')
// console.log(s7 == s8)

console.log(Symbol.keyFor(s8));

// instanceof
// Symbol.hasInstance 
const obj1 = {
    [Symbol.hasInstance](param: any) {
        console.log(param) 
    }
}
console.log({a: 'a'} instanceof <any>obj1)

// isConcatSpreadable
let arr1 = [1, 2]
// console.log([].concat(arr1, [3,4])) // [1，2，3，4]
// arr1[Symbol.isConcatSpreadable] = false;
// console.log([].concat(arr1, [3,4])) // [[1,2],3,4]

class C  extends Array {
    constructor(...args: any){
        super(...args)
    }
    static get[Symbol.species]() {
        return Array
    }
    getName(){
        return 'name'
    }
}
// const c = new(1,2,3);
// const a = c.map((item: number) => item+1) // 衍生对象
// console.log(a instance C);
// console.log(a instanceof Array)

// match
let obj2 = {
    [Symbol.match](string: string) {
        console.log(string.length)
    },
    [Symbol.split](string: string){
        console.log('split')
    }
}
'abcde'.match(<RegExp>obj2)
'abcde'.split(<RegExp>obj2)
'abcde'.search(<RegExp>obj2)

const arr9 = [1,2,3]
const iterator = arr9[Symbol.iterator]();
console.log(iterator.next())

let obj4: unknown = {
    [Symbol.toPrimitive](type) {
        console.log(type)
    }
}
const res = (obj4 as number)++;
console.log(res)

