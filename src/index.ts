// Will say that we should defie type when we are creating the class
class keyValuePairs<K, V> {
    constructor(public key: K, public value: V) {}
}

// Type 1: Defining type using <TYPE, TYPE>
let pair = new keyValuePairs<string, string>("1", "1");
// Type 2: Atomatic difinition
let pairs_2 = new keyValuePairs("2", "2");
