abstract class animal{
    abstract animalsound():void;     //only for the use purpose because in  future this method are final use,if we not use 
    //then that show the error so we use this type of the method.
}

class dog extends animal{
    animalsound(): void {
        console.log("baw..,baw..,");
    }
}

let dog1 = new dog(); //here we make a method for the dog class beacuse it is fully declare..,
dog1.animalsound();
