type Student = Record<string,string|number>;

let student1 : Student = {
    "name" :"kuldeep",
    "age" : 23
};

console.log(typeof student1.name);