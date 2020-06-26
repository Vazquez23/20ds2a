function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top - 1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}


function randomStack(y) {
  console.time('Tiempo')
  let s = new Stack()
    let n;
    for (let x = 0; x < y; x++) {
      n = -20 + (Math.ceil((Math.random() * 40))) % (40 - (-10) + 1);
      s.push(n);
    }
  console.timeEnd('Tiempo')
}


console.log('\n1000')
randomStack(1000)

console.log('\n10000')
randomStack(10000)

console.log('\n100000')
randomStack(100000)