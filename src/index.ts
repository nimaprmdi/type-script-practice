class ArrayUtils {
    static wrapInArray<S>(value: S) {
        return [value];
    }
}

// A functional (outside of the class)
function wrapInArray<T>(value: T) {
    return [value];
}
// From The function
const arr = wrapInArray("1");
// In the class
const arrUtil = ArrayUtils.wrapInArray(1);
