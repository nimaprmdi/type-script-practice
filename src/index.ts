function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() {
                return value;
            },
            set(newValue: string) {
                if (newValue.length < length) throw new Error(`${propertyName} must be at least ${length}`);
                value = newValue;
            },
        };

        Object.defineProperty(target, propertyName, descriptor);
    };
}

class User {
    @MinLength(4)
    password: string;

    constructor(pasword: string) {
        this.password = pasword;
    }
}

const user = new User("aaa"); // Will fail because it is 3
const user2 = new User("aaaa"); // Will success because it is 4
