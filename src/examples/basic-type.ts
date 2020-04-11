// 布尔类型
let bool:boolean = false;

// 数值类型
let num:number = 123;
num = 0x7b;

// 字符串类型
let str:string = 'abc';
str = `数量是${num}`

// 数组类型
let arr:number[] = [];
arr = [3, 2];
let arr2: Array<number>;
let arr3: Array< string | number>
arr3 = [3,'3']
// let arr4: {string | number}[]
// arr4 = [3,'d']

// 元组
let tuple:[string,number,boolean]
tuple = ['a',3,false]

// 枚举
enum Roles {
    SUPER_ADMIN, // 对应序列号0
    ADMIN = 4,
    USER // 5
}
// any
let value:any;
value = 23;

// void
const test = (text:string):void => {
    console.log(text);
}
let v:void;
v = undefined;

let u:undefined
u = undefined
let n:null
n = null;
// never
const errorFunc = (message:string):never => {
    throw new Error(message)
}
const infiniteFunc = ():never =>{
    while(true){}
}

//object
let obj = {
    name: 'lison',
}
function getObjeckt(obj:object){
    console.log(obj);
}

// 类型断言
const getLength = (target: string | number) => {
    if((<string>target).length || (target as string).length === 0){
        return (<string>target).length
    }else {
        return target.toString().length
    }
}

console.log('num', num)