function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

function randomQueue(y) {
  console.time('Tiempo')
  let s = new Queue()
    let n;
    for (let x = 0; x < y; x++) {
      n = -20 + (Math.ceil((Math.random() * 40))) % (40 - (-10) + 1);
      s.enqueue(n);
    }
  console.timeEnd('Tiempo')
}


console.log('\n1000')
randomQueue(1000)

console.log('\n10000')
randomQueue(10000)

console.log('\n100000')
randomQueue(100000)