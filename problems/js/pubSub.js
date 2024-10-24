// Define a PubSubObj constructor function to handle event subscriptions and publications
const PubSub = function() {
    // Initialize an empty object to store events and their callbacks
    this.events = {};
}

// Method to subscribe to an event with a callback
PubSub.prototype.subscribe = function(event, callback) {
    // If the event doesn't exist, create an empty array for it
    if (!this.events[event]) {
        this.events[event] = [];
    }
    // Add the callback to the event's array
    this.events[event].push(callback);
}

// Method to unsubscribe from an event
PubSub.prototype.unsubscribe = function(event, callback) {
    // If the event doesn't exist, return early
    if (!this.events[event]) return;

    // Filter out the callback from the event's array
    this.events[event] = this.events[event].filter(cb => cb !== callback);
}

// Method to publish an event with data
PubSub.prototype.publish = function(event, data) {
    // If the event doesn't exist, return early
    if (!this.events[event]) return;

    // Call each callback associated with the event, passing the data
    this.events[event].forEach(callback => callback(data));
}


/* // Define a PubSub class to handle event subscriptions and publications
class PubSub {
    constructor() {
        // Initialize an empty object to store events and their callbacks
        this.events = {};
    }

    // Method to subscribe to an event with a callback
    subscribe(event, callback) {
        // If the event doesn't exist, create an empty array for it
        if (!this.events[event]) {
            this.events[event] = [];
        }
        // Add the callback to the event's array
        this.events[event].push(callback);
    }

    // Method to unsubscribe from an event
    unsubscribe(event, callback) {
        // If the event doesn't exist, return early
        if (!this.events[event]) return;

        // Filter out the callback from the event's array
        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }

    // Method to publish an event with data
    publish(event, data) {
        // If the event doesn't exist, return early
        if (!this.events[event]) return;

        // Call each callback associated with the event, passing the data
        this.events[event].forEach(callback => callback(data));
    }
} */

// Usage example:
const pubSub = new PubSub();

function onMessageReceived(data) {
    console.log(`Message received: ${data}`);
}

function onMessageReceived2(data) {
    console.log(`Message received: ${data}`);
}

pubSub.subscribe('message', onMessageReceived);
pubSub.subscribe('message', onMessageReceived2);
pubSub.publish('message', 'Hello, World 2!');

pubSub.unsubscribe('message', onMessageReceived);
pubSub.publish('message', 'Hello, World!');