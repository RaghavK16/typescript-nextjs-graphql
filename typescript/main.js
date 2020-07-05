"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome';
console.log(message);
var sum; //number
var title = 'Haha';
var name;
var choice = true; //boolean
choice = false;
console.log(choice);
sum = 45;
var sentence = "I am Raghav.\nThe title is " + title + ".\nThe sum is " + sum + "."; //multiline string
console.log(sentence);
var list1 = [1, 5, 6]; //list declaration
var list2 = [1, 2, 3]; //both list declarations are same
console.log(list1[0]);
console.log(list2[2]);
var list3 = ['Hi there', 77]; //tuple
console.log(list3[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //enumeration
var c = Color.Red;
console.log(c);
var randval = true; //any type
randval = 0;
randval = 'Raghav';
var myvar = 'true'; //unknown type
myvar.toUpperCase(); //requires explicit type declaration when using or assigning variable
console.log(myvar);
var b = 20; //implicitly-typed as number, cannot be assigned a non-int val
var multiType; //union of data types
multiType = false;
multiType = 89;
//functions
function add(num1, num2) {
    if (!num2) {
        return num1;
    }
    return num1 + num2;
}
console.log(add(5, 10));
console.log(add(5));
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: "Spider",
    lastname: "Man"
};
fullname(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning! " + this.employeeName);
    };
    return Employee;
}());
;
var e1 = new Employee("Albert");
e1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    return Manager;
}(Employee));
;
var m1 = new Manager("Charles");
console.log(m1.employeeName);
m1.greet();
