//basic interface

interface User {
  name: string;
  age: number;
  Ischildren: boolean;
  gender?:string            // here we can  create gender as optional variable..,
}

function validate(givetype: User) {}
validate({
      name:"killer",
      age:22,
      Ischildren:false,
});
console.log(validate);


