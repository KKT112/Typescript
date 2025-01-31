//basic interface

interface User {
  name: string;
  age: number;
  Ischildren: boolean;
  gender?: string; // here we can  create gender as optional variable..,
}

function validate(givetype: User) {
  givetype.name = givetype.name;
}
validate({
  name: "killer",
  age: 22,
  Ischildren: false,
});
console.log(validate);

//another
interface Subscription {
  readonly id: number;
  url?: string;
  name: string;
  sign(): string;
}

let subscribe: Subscription = {
  id: 1,
  name: "Paris",
  sign(): string {
    return "Bonjour";
  },
};
console.log(subscribe);
