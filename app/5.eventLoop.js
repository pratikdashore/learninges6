// Stack :: function calls form a stack of frames
// Heap :: Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.
// Queue :: A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.


//Stack::
/* 
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); */


// Queue::

/* At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one.To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter.As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty.Then, the event loop will process the next message in the queue(if there is one). */

/* "Run-to-completion"
Each message is processed completely before any other message is processed. */

/* Adding Messages:

In web browsers, messages are added anytime an event occurs and there is an event listener attached to it.If there is no listener, the event is lost.So a click on an element with a click event handler will add a message — likewise with any other event.

The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value(optional; defaults to 0). The time value represents the(minimum) delay after which the message will be pushed into the queue.If there is no other message in the queue, and the stack is empty, the message is processed right after the delay.However, if there are messages, the setTimeout message will have to wait for other messages to be processed.For this reason, the second argument indicates a minimum time — not a guaranteed time. */

/* (() => {
  console.log('This is the start');

  setTimeout(() => {
    console.log('Callback 1 : This is a msg from callback 1')
    setTimeout(() => {
      console.log('Inner callback 1: this is from inner settimeout msg');
    });
  });

  console.log('In Between');

  setTimeout(() => {
    console.log('Callback 2 :')
  }, 0);

  console.log('end script');

})() */

/* Several runtimes communicating together
A web worker or a cross - origin iframe has its own stack, heap, and message queue.Two distinct runtimes can only communicate through sending messages via the postMessage method.This method adds a message to the other runtime if the latter listens to message events. */


// Task => tasks and microtask are kept in queue or as per understanding event queue , so called tasks queue and microtasks queue

/* Tasks get added to the task queue when:

A new JavaScript program or subprogram is executed(such as from a console, or by running the code in a < script > element) directly.
An event fires, adding the event's callback function to the task queue.
A timeout or interval created with setTimeout() or setInterval() is reached, causing the corresponding callback to be added to the task queue. */

/* The event loop driving your code handles these tasks one after another, in the order in which they were enqueued.The oldest runnable task in the task queue will be executed during a single iteration of the event loop.After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering.Then the browser moves on to the next iteration of event loop. */

/* Microtasks
At first the difference between microtasks and tasks seems minor.And they are similar; both are made up of JavaScript code which gets placed on a queue and run at an appropriate time.However, whereas the event loop runs only the tasks present on the queue when the iteration began, one after another, it handles the microtask queue very differently.

There are two key differences.

  First, each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code.If not, it runs all of the microtasks in the microtask queue.The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.

    Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly - added microtasks execute before the next task is run.That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added. */

/*     Enqueing the microtasks : 
    Old Way : using promise

var p = new Promise(function (resolve, reject) {
  console.log('inside promise', new Date().toLocaleTimeString(), new Date().getMilliseconds());
  resolve(new Date().toLocaleTimeString());
})

p.then(function (res) {
  console.log('inside then ', res, new Date().getMilliseconds());
}); */

//  recommended way (Due to errors in promise rejections) :: 


(() => {

  console.log('This is start')

  setTimeout(() => {
    console.log(
      "time out callback",
      new Date().toLocaleTimeString(),
      new Date().getMilliseconds()
    );

    setTimeout(() => {
      console.log(
        "insider time out 1 settime cb",
        new Date().toLocaleTimeString(),
        new Date().getMilliseconds()
      );
    });
  }, 0);

  console.log('In between ');

  queueMicrotask(function callback() {
    console.log('inside microtask 1', new Date().toLocaleTimeString(), new Date().getMilliseconds());
    queueMicrotask(function insiderMicroTask() {
      console.log('inside microtask 1.1', new Date().toLocaleTimeString(), new Date().getMilliseconds());
    })
  });

  var p = new Promise(function (resolve, reject) {
    console.log('inside promise', new Date().toLocaleTimeString(), new Date().getMilliseconds());
    resolve(new Date().toLocaleTimeString());
  })

  p.then(function (res) {
    console.log('inside then ', res, new Date().getMilliseconds());
  });

  queueMicrotask(function callback() {
    console.log('inside microtask 2', new Date().toLocaleTimeString(), new Date().getMilliseconds());
  });


  setTimeout(() => {
    console.log(
      "settime 2 cb",
      new Date().toLocaleTimeString(),
      new Date().getMilliseconds()
    );
  });

  console.log('ends')

})();


// executes messageQueues messages in one microtasks and then again wait for next queueMicrotask 
/* (() => {

  const messageQueue = [];

  let sendMessage = (message) => {
    messageQueue.push(message);

    if (messageQueue.length === 1) {
      queueMicrotask(() => {
        const json = JSON.stringify(messageQueue);
        messageQueue.length = 0;
        console.log(`executed for :: ${json}`)
        fetch("https://www.boredapi.com/api/activity");
      });
    }
  };

  sendMessage('My First Message');
  sendMessage('My Second Message');
  console.log('In Between');

  setTimeout(() => {
    sendMessage('Settimeout message');
  });

  sendMessage('My Third Message');

  console.log('ends');

})();
 */

/* Tasks vs microtasks
A task is any JavaScript scheduled to be run by the standard mechanisms such as initially starting to execute a program, an event triggering a callback, and so forth.Other than by using events, you can enqueue a task by using setTimeout() or setInterval().

The difference between the task queue and the microtask queue is simple but very important:

When executing tasks from the task queue, the runtime executes each task that is in the queue at the moment a new iteration of the event loop begins.Tasks added to the queue after the iteration begins will not run until the next iteration.
Each time a task exits, and the execution context stack is empty, each microtask in the microtask queue is executed, one after another.The difference is that execution of microtasks continues until the queue is empty—even if new ones are scheduled in the interim.In other words, microtasks can enqueue new microtasks and those new microtasks will execute before the next task begins to run, and before the end of the current event loop iteration. */

(() => {

})()