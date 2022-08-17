type WatchedParameters = {
    methodName: string;
    parameterIndex: number;
};

const watchedParameters: WatchedParameters[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex,
    });
}

class Vehicle {
    move(car: string, @Watch speed: number) {}
}

console.log(watchedParameters);
