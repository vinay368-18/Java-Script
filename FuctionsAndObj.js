function student(name, dept) {
    this.name = name;
    this.dept = dept;
}
let s1 = new student("vinay", "cse")
let s2 = new student("arjun", "mech")

console.log(s1);
console.log(s2);

s1.dept = "ece"

console.log(s1);
console.log(s2);