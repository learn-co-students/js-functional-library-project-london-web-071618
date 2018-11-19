fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const val in collection) {
        callback(collection[val ])
      }
      return collection
    },

    map: function(collection, callback) {
      const new_array = []
      for(value in collection) {
        new_array[new_array.length] = callback(collection[value])
      }
      return new_array
    },

    reduce: function(collection, callback, acc) {
      let accumulator
      if(acc) {
        accumulator = acc
      } else {
        accumulator = 0
      }
      for (const item of collection) {
        accumulator = callback(accumulator, item)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      for (const item of collection) {
        if(predicate(item)) {
          return item
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (const item of collection) {
        if(predicate(item)) {
          newArray = [...newArray, item]
        }
      }
      return newArray
    },

    size: function(collection) {
      let counter = 0
      for(const item in collection) {
        counter += 1
      }
      return counter
    },

    first: function(collection, n = 1) {
      const newArray = collection.slice(0, n)
      return (n > 1 ? newArray : newArray[0])
    },

    last: function(collection, n = 1) {
      const newArray = collection.slice(-n)
      return (n > 1 ? newArray : newArray[0])
    },

    compact: function(collection) {
      return collection.filter(Boolean)
    },

    sortBy: function(array, callback) {
      const newArray = array.slice()
      newArray.sort((a, b) => {
        return callback(a) - callback(b)
      })
      return newArray
    },

    flatten: function(array, bool = false) {
      let newArray = []
      if (!Array.isArray(array)) {
        return newArr[newArray.length] = array
      }
      const flattener = (object) => {
        if(bool) {
          for (const item of object){
            if(Array.isArray(item)) {
              for(const val of item) {
                newArray[newArray.length] = val
              }
            } else {
              newArray[newArray.length] = item
            }
          }
          return newArray
        } else {
          for(const val of object) {
            if(typeof val === "object") {
              flattener(val)
            } else {
              newArray[newArray.length] = val
            }
          }
        }
      }
      flattener(array)
      return newArray
    },

    uniq: function(collection, isSorted = false, callback) {
      if(isSorted) {
        const sortedArr = [collection[0]]
        for (let i = 1; i < collection.length; i++) {
          if (sortedArr[i-1] !== collection[i]) {
            sortedArr[sortedArr.length] = collection[i]
          }
        }
        return sortedArr
      } else if(!callback) {
        return Array.from(new Set(collection))
      } else {
        const callbackVals = new Set()
        const newSet = new Set()
        for(const item of collection) {
          const cbValue = callback(item)
          if(!callbackVals.has(cbValue)) {
            callbackVals.add(cbValue)
            newSet.add(item)
          }
        }
        return Array.from(newSet)
      }
    },

    keys: function(collection) {
      let newArray = []
      for(const item in collection) {
        newArray[newArray.length] = item
      }
      return newArray
    },

    values: function(collection) {
      let newArray = []
      for(const item in collection) {
        newArray[newArray.length] = collection[item]
      }
      return newArray
    },

    functions: function(collection) {
      let newArray = []
      for(const val in collection) {
        if(typeof collection[val] === "function" ) {
          newArray[newArray.length] = val
        }
      }
      return newArray
    },
    giveMeMore: function() {
      return true
    }
  }
})()

fi.libraryMethod()
