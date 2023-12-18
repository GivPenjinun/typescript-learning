"use strict";
function sayHi2() {
    console.log(`Hello `);
}
function sayHello(name) {
    console.log(`Hello ${name}`);
}
function getDiscount() {
    return 500;
}
const checkNumber = (num) => {
    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
};
function total2(a, b) {
    return a + b;
}
function showEmployee(name, age, address = "BKK") {
    console.log(`${name} ${age} ${address}`);
}
showEmployee("G", 30);
showEmployee("B", 25, "Non");
///////////////////////
const person1 = {
    name: "kong",
    age: 25,
};
const person2 = {
    name: "giv",
    age: 30,
    address: "111",
};
const position = {
    X: 10,
    Y: 20,
};
//รับค่าobject
function showDetail(data) {
    console.log(`name = ${data.name} , age = ${data.age}`);
}
showDetail(person1);
//excess properties check ตรวจสอบpropertiesที่ส่งเข้ามาก่อนเรียกใช้function
//ต้องใส่objectไปในปีกกาทั้งก้อน
showDetail({ name: "giv", age: 30 });
//ส่งค่าobject
function randomPosition() {
    return {
        X: Math.random(),
        Y: Math.random(),
    };
}
let emp1 = {
    id: 1,
    name: "S",
    salary: 50000,
    phone: "02555",
};
emp1.phone = "085-255-5666";
let emp2 = {
    id: 2,
    name: "C",
    salary: 50000,
};
console.log(emp2);
//type aliases (optional properties) โดยใส่ property?: type
////type aliases (readonly modifier) โดยใส่ readonly property: type
//array
const users = [];
users.push("kong");
//array นี้มีelementเป็นtype Employee2
const employees = [];
employees.push({ name: "King", salary: 50000, department: "Programmer" });
employees.push({ name: "G", salary: 40000, department: "Sale" });
console.log(employees);
function sayHi(name) {
    if (!name) {
        return "Hello";
    }
    if (typeof name === "string") {
        return `Hi, ${name}`;
    }
    //หากไม่เข้าเงื่อนไขใดเลยจะสร้างerrorใหม่
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
function total(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("type in invalid");
}
console.log(total("10", "20"));
//Spread Operator
const section = ["a", "b"];
const department = ["1", "2"];
department.push(...section);
console.log(department);
//rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}
console.log(sum(1, 2, 3, 5));
//destructuring
const color = ["red", "blue", "green"];
const [red, blue, green] = color;
const person = {
    uname: "kong",
    age: 30,
    address: "BKK",
};
const { uname, age, address } = person;
//Tuple
const point = [10, 20];
const goodStatus = [200, "OK"];
point[0] = 100;
//Tuple Label
const notFound = [404, "Not Found"];
const badRequest = [400, "Bad Request"];
const serverErr = [500, "Internal Server Error"];
//Enum
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Easy"] = 0] = "Easy";
    GameMode[GameMode["Medium"] = 1] = "Medium";
    GameMode[GameMode["Hard"] = 10] = "Hard";
    GameMode["VeryHard"] = "\u0E22\u0E32\u0E01\u0E21\u0E32\u0E01";
})(GameMode || (GameMode = {}));
const select = GameMode.Easy;
console.log(select); // ค่าเป็น 0
const person3 = {
    name: "king",
    age: 25,
    gender: "male",
}; //ถ้าใช้contต้องใส่ค่าเริ่มต้นเลย เพราะreassignไม่ได้
let person4;
person4 = {
    name: "kong",
    gender: "male",
};
let person5 = {
    name: "Gee",
    info: () => {
        console.log(`new date = ${new Date().toDateString()}`);
    },
};
person5.info();
let person6 = {
    name: "Gee",
    gender: "female",
    info: () => {
        console.log(`new date = ${new Date().toDateString()}`);
    },
    title: "programmer",
    income: 50000,
};
let person7 = {
    name: "Gee",
    gender: "female",
    info: () => {
        console.log(`new date = ${new Date().toDateString()}`);
    },
    title: "programmer",
    income: 50000,
};
let person8 = {
    name: "test",
    age: 32,
    gender: "none",
};
console.log(person8);
// Union Types
let info;
info = 50;
info = "kong";
let coordinates;
coordinates = { x: 5, y: 10, lat: 40, long: 50 };
console.log(coordinates);
let text = ["Hi", "Hello", "สวัสดี"];
// Union Type & function
function sayHello2(person) {
    if (typeof person === "string") {
        console.log(`Hello ${person}`);
    }
    else {
        person.forEach((element) => console.log(`Hello ${element}`));
    }
}
sayHello2(["k", "g"]);
let user = "Admin";
function confirmDialog(answer) {
    console.log(`result = ${answer}`);
}
confirmDialog("yes");
//OOP class & object & constructor & property & readonly & access modifier & method
class Employee3 {
    constructor(id, myname, department, salary, address) {
        this.id = id;
        this.name = myname; //ให้ค่าในmyname เก็บในproperty name ปกติควรเขียนเหมือนกันทั้งpropertyกับparameter แบบdepartment
        this.department = department;
        this.salary = salary;
        this.address = address;
        console.log("call constructor");
    }
    showDetail() {
        console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
    }
    //setter
    setDepartment(setDepartment) {
        this.department = setDepartment;
    }
    //getter
    getDepartment() {
        return this.department;
    }
    // getter & setter
    get Salary() {
        return this.salary;
    }
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
//object
const emp4 = new Employee3("001", "Gee", "IT", 50000); //()คือเรียกใช้constructor
emp4.address = "bkk";
//emp4.id ไม่ได้
emp4.setDepartment("programmer");
emp4.showDetail();
console.log(emp4.getDepartment);
emp4.Salary = 60000; //salaryเป็น private ปกติแก้ไม่ได้ ต้องใช้ setter
console.log(emp4.Salary); //salaryเป็น private ปกติดูไม่ได้ ต้องใช้ getter
//parameter property วิธีลดรูปในการเขียน propertyกับconstructor
class Employee4 {
    //ลดรูปโดย ไม่ประกาศproperty แต่ใส่ในparameterเลย
    constructor(id, name, department, salary, address) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.address = address;
        //Protected Access Modifier
        this.companyName = "ABC Co.TH";
    }
    showDetail() {
        console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
    }
}
const emp7 = new Employee4("007", "Gu", "IT", 50000);
//console.log(emp7.companyName)
// inheritance
// lสืบทอดคุณสมบัติทั้งหมด
class IT extends Employee4 {
}
const emp5 = new IT("023", "king", "IT", 50000);
// Super ใช้เมื่อต้องการสืบทอดแค่บางคุณสมบัติ
//constructor class ลูกรับมา2 ส่งpropertyกลับไปเก็บที่classแม่3
class Accounting extends Employee4 {
    constructor(id, name, salary) {
        super(id, name, "Accounting", salary);
        console.log(`${this.companyName}`);
    }
}
const emp6 = new Accounting("023", "king", 50000); // ไม่ต้องใส่departmentแล้ว
//static property
class Company {
    //static method
    static showData() {
        console.log("ข้อมูลพนักงาน " + this.companyName);
        for (const person of this.employeeList) {
            person.showDetail(); //เพราะมาจากclass Employee4 เลยใช้methodนี้ได้
        }
    }
}
Company.companyName = "ABC CO.TH";
Company.founder = "kong";
Company.employeeList = []; //ใช้เก็บข้อมูลที่เกิดจากclass Employee และclassลูกๆ
//ปกติต้อง สร้างobjectใหม่ const company = new Company() ถึงจะเข้าถึงข้อมูลได้
//แต่ใส่static propertyแล้วทำแบบนี้ได้เลย
console.log(Company.companyName);
const emp8 = new IT("011", "A", "IT", 50000);
const emp9 = new Accounting("012", "B", 50000);
Company.employeeList.push(emp8);
Company.employeeList.push(emp9);
console.log(Company.employeeList);
Company.showData();
//Abstract class & abstract method
class Employee5 {
    //ลดรูปโดย ไม่ประกาศproperty แต่ใส่ในparameterเลย
    constructor(id, name, department, salary, address) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.address = address;
        //Protected Access Modifier
        this.companyName = "ABC Co.TH";
    }
    showDetail() {
        console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
    }
}
class Sale extends Employee5 {
    info() {
        console.log("sell everythimng");
    }
}
const emp10 = new Sale("010", "D", "Sale", 50000);
emp10.info();
class Admin extends Employee5 {
    constructor() {
        super(...arguments);
        this.income = 15000;
    }
    info() {
        console.log("sell everythimng");
    }
    reportIncome() {
        console.log(`annual income = ${this.income * 12}`);
    }
}
const emp11 = new Admin("014", "D", "Admin", 15000);
emp11.reportIncome();
//////////////////////////////////////
//Generic
//ปัญหา จะเห็นว่าด้านล่างกระบวนการทำงานของfunctionเหมือนกัน แต่typeของข้อมูลในarrayไม่เหมือนกันก็ต้อง สร้างfunctionใหม่
function getElementNumber(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementString(arr, count) {
    return arr.slice(arr.length - count);
}
//Generic function ช่วยแก้ปัญหาด้านบนได้
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
const myNum = [10, 20, 30, 40];
const myStr = ["10", "20", "30", "40"];
//วิธีเรียกใช้
console.log(getElement(myStr, 2));
console.log(getElement(myNum, 3));
//Generic Multiple Type มีหลายๆtypeที่จะส่งเข้าfunc
function merge(param, param2) {
    console.log(`${param} - ${param2}`);
}
merge("king", true);
const product = { name: "shirt", price: 500 };
const details = { colors: ["red", "white"] };
//Generic Constraint
function merge2(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
console.log(merge2(product, details));
//Generic Class
class Stack {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack = new Stack();
stack.pushElement("jojo");
stack.pushElement("king");
console.log(stack);
//Generic Default type
class Stack2 {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack2 = new Stack2();
stack2.pushElement(10);
stack2.pushElement(20);
console.log(stack);
////////////////////////
//Typeof Gaurds
function truncate(value, length) {
    if (typeof value === "number") {
        return value.toString().slice(0, length);
    }
    else {
        return value.slice(0, length);
    }
}
//console.log(truncate("kong", 2));
//Equality Narrowing
function compareValue(x, y) {
    if (x === y) {
        console.log("Equal");
    }
    else {
        console.log("Inequal");
    }
}
compareValue(3, 3);
// InstandofNarrowing
class User {
    constructor(username) {
        this.username = username;
    }
}
class Employee6 {
    constructor(name) {
        this.name = name;
    }
}
function printObject(obj) {
    if (obj instanceof Employee6) {
        console.log("instance of Employee");
    }
    else {
        console.log("instance of User");
    }
}
function calculateArea(s) {
    switch (s.type) {
        case "rectangle":
            return s.height * s.width;
            break;
        case "triangle":
            return 0.5 * s.base * s.height;
            break;
        default:
            return new Error("error");
    }
}
calculateArea({ width: 20, height: 30, type: "rectangle" });
////////////////////////////
