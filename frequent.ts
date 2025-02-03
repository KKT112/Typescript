const students: string[] = ["Pankaj", "Ram", "Shravan"];
const iterator = students.entries();

for (let entry of iterator) {
    const [index, value] = entry;
    console.log(`Index: ${index}, Value: ${value}`);
};


console.log(students.push("3"));
console.log(students.toString());