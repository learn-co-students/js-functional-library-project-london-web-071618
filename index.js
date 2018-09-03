fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      let keys_arr = []
      for (let key in arr) {keys_arr.push(key)}
      for (let i=0; i < keys_arr.length; i++) {
        alert(arr[keys_arr[i]])
      }
      return arr;
    },

    map: function(arr, callback) {
      let new_arr = [];
      let keys_arr = [];
      for (let key in arr) {keys_arr.push(key)}
      for (let i=0; i < keys_arr.length; i++) {
        new_arr.push(callback(arr[keys_arr[i]]))
      }
      return new_arr
    },

    reduce: function(arr, callback, acc=0) {
      let answer = acc
      for (let i= 0; i < arr.length; i++) {
        answer = callback(answer, arr[i])
      }
      return answer
    },

    find: function(arr, callback) {
      for (let i= 0; i < arr.length; i++) {
        let isTrue = callback(arr[i])
        if (isTrue === true) {
          return arr[i]
        }
      }
    },


    filter: function(arr, callback) {
      let newArr = []
      for (let i= 0; i < arr.length; i++) {
        let isTrue = callback(arr[i])
        if (isTrue === true) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    size: function(arr) {
      let counter = 0;
      if (!!arr.length === true) {
        for (let i of arr) { counter += 1}
      }
      else {
        for (let key in arr) { counter += 1 }
      }
      return counter

    },

    first: function(arr, n=0) {
      newArr = []
      if (n===0) {
        return arr[0]
      } else {
        for (let i=0; i<n; i++) {
          newArr.push(arr[i])
        }
        return newArr
      }
    },

    last: function(arr, n=0) {
      newArr = []
      if (n===0) {
        return arr[arr.length-1]
      } else {
        for (let i=arr.length-n; i<arr.length; i++) {
          newArr.push(arr[i])
        }
        return newArr
      }
    },

    compact: function(arr) {
      function func(val) {
        if (!!val === true) {
          return true
        } else {
          return false
        }
      }
      return fi.filter(arr, func)
    },

    sortBy: function(arr, func) {
      newArr = arr.slice()
      for (let i=newArr.length-1; i>=0; i--) {
        for (let j=1; j <= i; j++) {
          if (func(newArr[j-1])> func(newArr[j])) {
          let temp = newArr[j-1];
          newArr[j-1] = newArr[j];
          newArr[j] = temp;
        }
      }
    }
    return newArr

    },
    flatten: function(arr, tfValue) {
      let newArr = []
      //defined function get in there
      function getInThere(subArr) {
        for (let i = 0; i < subArr.length; i++) {
        if (typeof subArr[i] === "number"){
          newArr.push(subArr[i])
        }
        else if (typeof subArr[i] === "object"){
          getInThere(subArr[i])
        }
      }
     }

     if (tfValue === true) {
       for (let i = 0; i < arr.length; i++) {
         if (typeof arr[i] === "number"){
           newArr.push(arr[i])
         }
         else if (typeof arr[i] === "object"){
           for (let j = 0; j < arr[i].length; j++) {
             newArr.push(arr[i][j])
           }
         }
       }
     }
     else {
       getInThere(arr)
     }
     return newArr
    },

    uniq: function(arr, tfValue, iterator) {
      let newArr = []
      function makeUniq(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (newArr.includes(arr[i]) === false) {
            newArr.push(arr[i])
          }
        }
      }
      if (tfValue === false) {
        let iteratedArr = fi.map(arr, iterator)
        makeUniq(iteratedArr)
      }
      else {
        makeUniq(arr)
      }
      return newArr
    },

    keys: function(obj) {
      let keys_arr = []
      for (let key in obj) {keys_arr.push(key)}
      return keys_arr
    },

    values: function(obj) {
      let keys_arr = []
      let new_arr = []
      for (let key in obj) {keys_arr.push(key)}
      for (i = 0; i < keys_arr.length; i++){
         new_arr.push(obj[keys_arr[i]])
      }
      return new_arr
    },

    functions: function(obj) {
      let newArr = []
      unsortedArr = fi.keys(obj)

      for (i=0; i<unsortedArr.length; i++) {
        if (typeof obj[unsortedArr[i]] === "function") {
          newArr.push(unsortedArr[i])
        }
      }
      const comparator = function (a, b) {
        return a.localeCompare(b);
      }
      return newArr.sort(comparator)
    },

    giveMeMore: function() {
      return true
    }


  }
})()
