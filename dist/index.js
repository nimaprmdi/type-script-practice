"use strict";
class CalendarClass {
    constructor(name) {
        this.name = name;
    }
    removeEvent() {
        console.log("Remove CalendarClass");
    }
}
class GoogleCalendar extends CalendarClass {
    constructor(name) {
        super(name);
        this.name = name;
    }
    sync() {
        console.log("Hello");
    }
    addEvent() {
        console.log(this.removeEvent());
    }
}
let calendar = new GoogleCalendar("google");
console.log(calendar.addEvent());
//# sourceMappingURL=index.js.map