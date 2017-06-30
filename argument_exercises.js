function sum(...nums){
  let total = 0;
  for (let i = 0; i < nums.length; i++){
    total = nums[i] + total;
  }
  return total;
}
// console.log(sum(1,2,3,4));


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
// markov.says('hi', 'Dallas');

//
// Function.prototype.myBind = function(context){
//
//   let bindTimeArgs = Array.from(arguments).slice(1);
//   console.log(Array.from(arguments));
//   let self = this;
//
//   return function(){
//     let callTimeArgs = Array.from(arguments);
//     console.log(callTimeArgs);
//     self.apply(context, bindTimeArgs.concat(callTimeArgs));
//   };
//
// };

Function.prototype.myBind = function(context, ...args) {
  return (...callTimeArgs) => {
    this.apply(context, args.concat(callTimeArgs));
  };
};

// markov.says.myBind(breakfast, "meow")("Markov");


function curriedSum(numArgs){
  const numbers = [];
  return function _curriedSum(number){
    numbers.push(number);
    if (numbers.length === numArgs){
      let total = numbers.reduce(function(totals,value){
        return (totals + value);
      }, 0);
      return total;
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

Function.prototype.curry1 = function(numArgs){
  const args = [];
  let fn = this;
  function _curried(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply("NOTHING", args);
    } else {
      return _curried;
    }
  }
  return _curried;
};

const lol = curriedSum(4);
console.log(lol(5)(30)(20)(1)); // => 56
