fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
       for (const element in collection) {
        callback(collection[element])
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = []
      for (const element in collection) {
       const newElement = callback(collection[element])
       newArray.push(newElement)
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
       if (!acc) {
         acc = collection[0]
         collection = collection.slice(1)
       }

        for (const index in collection) {
          acc = callback(acc, collection[index], collection)
        }
        return acc
    },

    find: function(collection, predicate) {
      for (const user of collection) {
        if (predicate(user)) {
          return user
        }
      }
    },

    filter: function(collection, cb) {
      const newCollection = []
      for (const user of collection) {
        if (cb(user)) {
          newCollection.push(user);
        }
      }
      return newCollection
    },

    size: function(collection) {
      let counter = 0
      for (const el in collection) {
        counter++
      }
      return counter
    },

    first: function(collection, n) {
      if (!!n) {
        return collection.slice(0,n);
      }
      else {return collection[0]}
    },

    last: function(collection, n) {
      if (!!n) {
        return collection.slice(collection.length- n);
      }
      else {
      return collection[collection.length-1]
    }
    },

    compact: function(collection) {
      return fi.filter(collection, n=> !!n === true)
    },

    sortBy: function(array, cb) {
      let appliedSorted = array.map(cb).sort(function(a, b){return a - b})
      let sorted = [...array]
      sorted = sorted.sort(function(a, b){return a - b})

      if( appliedSorted[0] === cb(sorted[0]) ) {
        return appliedSorted
      } else {

      let finalArr =[]
        for(const asind in appliedSorted) {
          for(const index in array) {
            if (cb(array[index]) === appliedSorted[asind]) {
              finalArr.push(array[index])
              }
            }
          }
          return finalArr
        }
      },

    flatten: function(collection, shallow) {
       if(shallow) {
         return collection.reduce((acc, val) => acc.concat(val), [])
       } else {
           return collection.reduce((acc, val) => Array.isArray(val) ? acc.concat(fi.flatten(val)) : acc.concat(val), []);
       }
      },

    uniq: function(collection, sorted, callback) {
          if (callback) {
            let cbCollect = collection.map(callback).sort()
              return cbCollect.filter(function(value, index, self) {
                return self.indexOf(value) === index;
              }
            )
          } else {
            return collection.filter(function(value, index, self) {
              return self.indexOf(value) === index;
              }
            )
          }
    },

    keys: function(object) {
      let arr =[]
        for (const key in object) {
          arr.push(key)
        }
        return arr
      },

    values: function(object) {
      let arr =[]
        for (const key in object) {
          arr.push(object[key])
        }
        return arr
      },

    functions: function(object) {
      let arr =[]
        for (const key in object) {
          if (typeof object[key] === 'function') {
                       arr.push(key)
          }
        }
        let unique = arr.filter(function(item, pos){
            return arr.indexOf(item)== pos;
          });
        return unique.sort()
      }

  }
})()

fi.libraryMethod()
