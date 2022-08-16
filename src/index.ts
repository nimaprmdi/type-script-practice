abstract class CalendarClass {
    constructor(public name: string) {}

    abstract addEvent(): void;
    protected removeEvent(): void {
        console.log("Remove CalendarClass");
    }
}

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar extends CalendarClass {
    constructor(public name: string) {
        super(name);
    }

    sync(): void {
        console.log("Hello");
    }

    addEvent(): void {
        console.log(this.removeEvent());
    }
}

class MicrosoftCalendaar implements Calendar {
    constructor(public name: string) {}

    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

let calendar = new GoogleCalendar("google");
let microCalendar = console.log(calendar.addEvent());
