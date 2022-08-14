class Ride {
    // Using (static) we say we want (_activeRides) belong to the class not objects
    static _activeRides: number = 0;

    start() {
        Ride._activeRides++;
    }

    stop() {
        Ride._activeRides--;
    }
    // with defining static we say _activeRides belongs to Ride class not the object
    static get activeRides(): number {
        return Ride._activeRides;
    }
}

let ride1 = new Ride(); // This will create an object
let ride2 = new Ride();

ride1.start();

ride2.start();

console.log(Ride.activeRides); // this will read from Ride Class (Liek global place)
