// Created a decorator that rewrite the bottom class function
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    /**
     * methodName is the name of function (say of Person)
     * descriptor is the function taat acces to the value
     *
     */
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
        // here we got the argument here (good morning)
        console.log("Before");
        original.call(this, ...args); // clling original function from the person class
        console.log("After");
    };
}

class Person {
    @Log
    say(message: string) {
        console.log("Person Say " + message);
    }
}

const person = new Person();
person.say("good morning");
