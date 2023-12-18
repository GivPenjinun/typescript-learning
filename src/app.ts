function sayHi2(): void {
  console.log(`Hello `);
}

function sayHello(name: string) {
  console.log(`Hello ${name}`);
}

function getDiscount(): number {
  return 500;
}

const checkNumber = (num: number): string => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

function total2(a: number, b: number): number {
  return a + b;
}

function showEmployee(name: string, age: number, address: string = "BKK") {
  console.log(`${name} ${age} ${address}`);
}

showEmployee("G", 30);
showEmployee("B", 25, "Non");
///////////////////////

const person1 = {
  name: "kong",
  age: 25,
};

const person2: { name: string; age: number; address: string } = {
  name: "giv",
  age: 30,
  address: "111",
};
const position: { X: number; Y: number } = {
  X: 10,
  Y: 20,
};
//รับค่าobject
function showDetail(data: { name: string; age: number }) {
  console.log(`name = ${data.name} , age = ${data.age}`);
}
showDetail(person1);

//excess properties check ตรวจสอบpropertiesที่ส่งเข้ามาก่อนเรียกใช้function
//ต้องใส่objectไปในปีกกาทั้งก้อน
showDetail({ name: "giv", age: 30 });

//ส่งค่าobject
function randomPosition(): { X: number; Y: number } {
  return {
    X: Math.random(),
    Y: Math.random(),
  };
}

//type aliases (custom type)
type Employee = {
  readonly id: number;
  name: string;
  salary: number;
  phone?: string;
};

let emp1: Employee = {
  id: 1,
  name: "S",
  salary: 50000,
  phone: "02555",
};
emp1.phone = "085-255-5666";

let emp2: Employee = {
  id: 2,
  name: "C",
  salary: 50000,
};

console.log(emp2);

//type aliases (optional properties) โดยใส่ property?: type

////type aliases (readonly modifier) โดยใส่ readonly property: type

//array
const users: string[] = [];
users.push("kong");

//Array & Type Aliases
type Employee2 = {
  name: string;
  salary: number;
  department: string;
};
//array นี้มีelementเป็นtype Employee2
const employees: Employee2[] = [];
employees.push({ name: "King", salary: 50000, department: "Programmer" });
employees.push({ name: "G", salary: 40000, department: "Sale" });
console.log(employees);

//function overloading
//ex1
function sayHi(): string;

function sayHi(name: string): string;

function sayHi(name?: unknown): unknown {
  if (!name) {
    return "Hello";
  }
  if (typeof name === "string") {
    return `Hi, ${name}`;
  }
  //หากไม่เข้าเงื่อนไขใดเลยจะสร้างerrorใหม่
  throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}

//ex2
function total(a: number, b: number): number;

function total(a: string, b: string): string;

function total(a: unknown, b: unknown): unknown {
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
const section: string[] = ["a", "b"];
const department: string[] = ["1", "2"];
department.push(...section);
console.log(department);

//rest parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sum(1, 2, 3, 5));

//destructuring
const color: string[] = ["red", "blue", "green"];
const [red, blue, green] = color;

const person = {
  uname: "kong",
  age: 30,
  address: "BKK",
};

const { uname, age, address } = person;

//Tuple
const point: [number, number] = [10, 20];
const goodStatus: [number, string] = [200, "OK"];

point[0] = 100;

//Tuple Label
const notFound: [code: number, status: string] = [404, "Not Found"];

//craete Tuple type
type HttpStatusCode = [number, string];
const badRequest: HttpStatusCode = [400, "Bad Request"];
const serverErr: HttpStatusCode = [500, "Internal Server Error"];

//Enum
enum GameMode {
  Easy, //เก็บค่า0
  Medium, //เก็บค่า1
  Hard = 10, //เก็บค่า10
  VeryHard = "ยากมาก", //เก็บค่า "ยากมาก"
}

const select: GameMode = GameMode.Easy;
console.log(select); // ค่าเป็น 0

// Interface + read only and optional
interface Person {
  name: string;
  age?: number;
  readonly gender: string;
}

const person3: Person = {
  name: "king",
  age: 25,
  gender: "male",
}; //ถ้าใช้contต้องใส่ค่าเริ่มต้นเลย เพราะreassignไม่ได้

let person4: Person;
person4 = {
  name: "kong",
  gender: "male",
};
// person4.gender = "female" error เปลี่ยนค่าไม่ได้

//Interface Method
interface Person2 {
  name: string;
  age?: number;
  readonly gender?: string;
  info: () => void;
}

let person5: Person2 = {
  name: "Gee",
  info: () => {
    console.log(`new date = ${new Date().toDateString()}`);
  },
};

person5.info();

//Extend Interface
interface Job {
  title: string;
  income: number;
}

interface Contact {
  address?: string;
  phone?: string;
}

interface PersonInfo extends Job, Contact {
  name: string;
  age?: number;
  readonly gender: string;
  info: () => void;
}

let person6: PersonInfo = {
  name: "Gee",
  gender: "female",
  info: () => {
    console.log(`new date = ${new Date().toDateString()}`);
  },
  title: "programmer",
  income: 50000,
};

//Intersection Type

type People = Person2 & Job & Contact;

let person7: People = {
  name: "Gee",
  gender: "female",
  info: () => {
    console.log(`new date = ${new Date().toDateString()}`);
  },
  title: "programmer",
  income: 50000,
};

//ใช้interfaceชื่อซ้ำเพื่อขยายขอบเขตของpropertyได้
interface Person3 {
  name: string;
  age?: number;
}

interface Person3 {
  gender?: string;
}

let person8: Person3 = {
  name: "test",
  age: 32,
  gender: "none",
};
console.log(person8);

// Union Types
let info: number | string;
info = 50;
info = "kong";

//Union Types & Alias
type Point = {
  x: number;
  y: number;
};

type Position = {
  lat: number;
  long: number;
};

let coordinates: Point | Position;
coordinates = { x: 5, y: 10, lat: 40, long: 50 };
console.log(coordinates);

type Message = string | string[];
let text: Message = ["Hi", "Hello", "สวัสดี"];

// Union Type & function
function sayHello2(person: string | string[]): void {
  if (typeof person === "string") {
    console.log(`Hello ${person}`);
  } else {
    person.forEach((element) => console.log(`Hello ${element}`));
  }
}
sayHello2(["k", "g"]);

// Literal types
type Role = "Admin" | "User";
let user: Role = "Admin";

function confirmDialog(answer: "yes" | "no") {
  console.log(`result = ${answer}`);
}
confirmDialog("yes");
//Template Literal Types
type vertical = "top" | "middle" | "bottom";
type horizontal = "left" | "cneter" | "right";
type alignment = `${vertical}-${horizontal}`;

//OOP class & object & constructor & property & readonly & access modifier & method
class Employee3 {
  //property
  private readonly id: string;
  public name: string;
  private department: string;
  private salary: number;
  public address?: string;

  constructor(
    id: string,
    myname: string,
    department: string,
    salary: number,
    address?: string
  ) {
    this.id = id;
    this.name = myname; //ให้ค่าในmyname เก็บในproperty name ปกติควรเขียนเหมือนกันทั้งpropertyกับparameter แบบdepartment
    this.department = department;
    this.salary = salary;
    this.address = address;

    console.log("call constructor");
  }

  public showDetail(): void {
    console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
  }
  //setter
  public setDepartment(setDepartment: string) {
    this.department = setDepartment;
  }
  //getter
  public getDepartment(): string {
    return this.department;
  }
  // getter & setter
  get Salary(): number {
    return this.salary;
  }
  set Salary(newSalary: number) {
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
  //Protected Access Modifier
  protected companyName: string = "ABC Co.TH";
  //ลดรูปโดย ไม่ประกาศproperty แต่ใส่ในparameterเลย
  constructor(
    private readonly id: string,
    public name: string,
    private department: string,
    private salary: number,
    public address?: string
  ) {}

  public showDetail(): void {
    console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
  }
}
const emp7 = new Employee4("007", "Gu", "IT", 50000);
//console.log(emp7.companyName)
// inheritance
// lสืบทอดคุณสมบัติทั้งหมด
class IT extends Employee4 {}

const emp5 = new IT("023", "king", "IT", 50000);

// Super ใช้เมื่อต้องการสืบทอดแค่บางคุณสมบัติ
//constructor class ลูกรับมา2 ส่งpropertyกลับไปเก็บที่classแม่3
class Accounting extends Employee4 {
  constructor(id: string, name: string, salary: number) {
    super(id, name, "Accounting", salary);
    console.log(`${this.companyName}`);
  }
}

const emp6 = new Accounting("023", "king", 50000); // ไม่ต้องใส่departmentแล้ว

//static property
class Company {
  public static companyName: string = "ABC CO.TH";
  public static founder: string = "kong";
  public static employeeList: Employee4[] = []; //ใช้เก็บข้อมูลที่เกิดจากclass Employee และclassลูกๆ

  //static method
  public static showData() {
    console.log("ข้อมูลพนักงาน " + this.companyName);
    for (const person of this.employeeList) {
      person.showDetail(); //เพราะมาจากclass Employee4 เลยใช้methodนี้ได้
    }
  }
}

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
abstract class Employee5 {
  //Protected Access Modifier
  protected companyName: string = "ABC Co.TH";
  //ลดรูปโดย ไม่ประกาศproperty แต่ใส่ในparameterเลย
  constructor(
    private readonly id: string,
    public name: string,
    private department: string,
    private salary: number,
    public address?: string
  ) {}

  public showDetail(): void {
    console.log(`detail: ${this.name}, ${this.department}, ${this.salary}`);
  }
  abstract info(): void; // class ลูกต้องมีmethodตัวนี้เสมอ
}

class Sale extends Employee5 {
  info(): void {
    console.log("sell everythimng");
  }
}

const emp10 = new Sale("010", "D", "Sale", 50000);

emp10.info();

//Interface class
interface IReport {
  income: number;
  reportIncome(): void;
}

class Admin extends Employee5 implements IReport {
  info(): void {
    console.log("sell everythimng");
  }
  income: number = 15000;
  reportIncome(): void {
    console.log(`annual income = ${this.income * 12}`);
  }
}

const emp11 = new Admin("014", "D", "Admin", 15000);
emp11.reportIncome();
//////////////////////////////////////

//Generic
//ปัญหา จะเห็นว่าด้านล่างกระบวนการทำงานของfunctionเหมือนกัน แต่typeของข้อมูลในarrayไม่เหมือนกันก็ต้อง สร้างfunctionใหม่
function getElementNumber(arr: number[], count: number) {
  return arr.slice(arr.length - count);
}

function getElementString(arr: string[], count: number) {
  return arr.slice(arr.length - count);
}

//Generic function ช่วยแก้ปัญหาด้านบนได้
function getElement<T>(arr: T[], count: number) {
  return arr.slice(arr.length - count);
}

const myNum: number[] = [10, 20, 30, 40];
const myStr: string[] = ["10", "20", "30", "40"];
//วิธีเรียกใช้
console.log(getElement<string>(myStr, 2));
console.log(getElement<number>(myNum, 3));

//Generic Multiple Type มีหลายๆtypeที่จะส่งเข้าfunc
function merge<T, U>(param: T, param2: U) {
  console.log(`${param} - ${param2}`);
}
merge<string, boolean>("king", true);

const product = { name: "shirt", price: 500 };
const details = { colors: ["red", "white"] };

//Generic Constraint

function merge2<T extends object, U extends object>(param1: T, param2: U) {
  return { ...param1, ...param2 };
}

console.log(merge2(product, details));

//Generic Class
class Stack<T> {
  private items: T[] = [];
  pushElement(element: T) {
    this.items.push(element);
  }
}

const stack = new Stack<string>();
stack.pushElement("jojo");
stack.pushElement("king");
console.log(stack);

//Generic Default type
class Stack2<T = number> {
  private items: T[] = [];
  pushElement(element: T) {
    this.items.push(element);
  }
}

const stack2 = new Stack2();
stack2.pushElement(10);
stack2.pushElement(20);
console.log(stack);

////////////////////////

//Typeof Gaurds

function truncate(value: string | number, length: number) {
  if (typeof value === "number") {
    return value.toString().slice(0, length);
  } else {
    return value.slice(0, length);
  }
}

//console.log(truncate("kong", 2));

//Equality Narrowing
function compareValue(x: string | number, y: string | number) {
  if (x === y) {
    console.log("Equal");
  } else {
    console.log("Inequal");
  }
}

compareValue(3, 3);

// InstandofNarrowing
class User {
  constructor(public username: string) {}
}

class Employee6 {
  constructor(public name: string) {}
}

function printObject(obj: Employee6 | User) {
  if (obj instanceof Employee6) {
    console.log("instance of Employee");
  } else {
    console.log("instance of User");
  }
}

//Discriminated Unions

interface Rectangle {
  width: number;
  height: number;
  type: "rectangle";
}

interface Triangle {
  base: number;
  height: number;
  type: "triangle";
}
type Shape = Rectangle | Triangle;
function calculateArea(s: Shape) {
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
