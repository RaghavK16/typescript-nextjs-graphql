export {}
let message='Welcome';
console.log(message);

let sum: number;  //number
const title='Haha';
let name:string;

let choice: boolean=true;  //boolean
choice=false;
console.log(choice);

sum=45;
let sentence: string=`I am Raghav.
The title is ${title}.
The sum is ${sum}.`;  //multiline string
console.log(sentence);

let list1: number[]=[1, 5, 6];  //list declaration
let list2: Array<number>=[1, 2, 3];  //both list declarations are same
console.log(list1[0]);
console.log(list2[2]);

let list3: [string, number]=['Hi there', 77];  //tuple
console.log(list3[0]);

enum Color {Red, Green, Blue};  //enumeration
let c: Color=Color.Red;
console.log(c);

let randval: any=true;  //any type
randval=0;
randval='Raghav';

let myvar: unknown='true';  //unknown type
(myvar as string).toUpperCase();  //requires explicit type declaration when using or assigning variable
console.log(myvar);

let b=20;  //implicitly-typed as number, cannot be assigned a non-int val

let multiType: number | boolean; //union of data types
multiType=false;
multiType=89;

//functions

function add(num1: number, num2?: number) {  //num2 is optional parameter using '?'
    if(!num2){
        return num1;
    }
    return num1+num2;
}
console.log(add(5, 10));
console.log(add(5));

//interfaces

interface Person {
    firstname: string;
    lastname?: string;  //lastname is optional
}

function fullname(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let p={
    firstname: "Spider",
    lastname: "Man"
};

fullname(p);

//classes

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName=name;
    }

    greet() {
        console.log(`Good Morning! ${this.employeeName}`);
    }
};

let e1=new Employee("Albert");
e1.greet();

class Manager extends Employee {  //inheritance
    constructor(managerName: string) {
        super(managerName);
    }
};

let m1=new Manager("Charles");
console.log(m1.employeeName);
m1.greet();