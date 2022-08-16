// Define interface with generic parameter
interface Result<T> {
    data: T | null;
    error: string | null;
}

// Define that fetch need a type parameter for the result
// And return result of the (T)
function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

const resultUser = fetch<User>("url");
resultUser.data?.username; // We have access to the username from data (User interface)

const resultProduct = fetch<Product>("url");
resultProduct.data?.title; // We have access to the Product interface
