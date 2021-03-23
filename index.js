const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      // if it's an array do this
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
        return collection;
        // if its an Object do this(key/value)
      } else {
        // iterate over Object
        for (let i = 0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]]);
        }
        return collection;
      }
    },

    map: function (collection, callback) {
      // same as each but produce a new array this time.
      const newArray = [];

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newArray.push(callback(collection[i]));
        }
        return newArray;
        // if its an Object do this(key/value)
      } else {
        // iterate over Object
        for (let i = 0; i < Object.keys(collection).length; i++) {
          newArray.push(callback(collection[Object.keys(collection)[i]]));
        }
        return newArray;
      }
    },

    reduce: function (collection, callback, acc) {
      // acc => initial state of reduction, should accumulate return value of callback
      // callback(acc, currentValue(element in array), collectionReference)
      // do this if initial value is passed
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
        return acc;
        // do this is no initial value is passed
      } else {
        let acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
        return acc;
      }
    },

    find: function (collection, predicate) {
      // predicate => truth test
      let found;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found = collection[i];
          // iteration will stop immediately once found
          break;
        }
      }
      return found;
    },

    filter: function (collection, predicate) {
      let found = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found.push(collection[i]);
        }
      }
      return found;
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else if (Object.keys(collection)) {
        return Object.keys(collection).length;
      }
    },

    first: function (array, n) {
      //retutns the first element of collection
      // returns first n element  when the second option n is provided
      if (n) {
        let newArray = [];
        for (let i = 0; i < n; i++) {
          newArray.push(array[i]);
        }
        return newArray;
      } else {
        return array[0];
      }
    },

    last: function (array, n) {
      if (n) {
        let newArray = [];
        for (let i = n; i > 0; i--) {
          newArray.push(array[array.length - i]);
        }
        return newArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function (array) {
      let falsy;
      let trueArr = [];
      for (let i = 0; i < array.length; i++) {
        // find the boolean value of the element
        // if boolean is true then push to new array
        falsy = Boolean(array[i]);
        if (falsy === true) {
          trueArr.push(array[i]);
        }
      }
      return trueArr;
    },

    sortBy: function (array, callback) {
      //return sorted copy of array, ranked in asc order by result of running each value through callback
      // values do not change
      // don't need to write my own sorting algo
      let sortedArray = [...array];
      return sortedArray.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function () {},

    uniq: function () {},

    keys: function () {},

    functions: function () {},
  };
})();

fi.libraryMethod();
