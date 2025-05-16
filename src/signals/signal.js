export default class Signal {
    constructor(value) {
        this.value = value;
        this.subscribers = [];
    }

    get() {
        return this.value;
    }
    set(newValue) {
        this.value = newValue;
        this.react();
    }

    react() {
        this.subscribers.forEach((subscriber) => subscriber(this.value));
    }

    reaction(func) {
        this.subscribers.push(func);
    }
}
