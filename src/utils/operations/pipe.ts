export function pipe<ValueType>(previous: ValueType) {
  return {
    if: function(condition: boolean) {
      if (condition) {
        return {
          then: (newValue: ValueType | ((prop: ValueType) => ValueType)) =>
            // if a callback is passed, callback is executed with previous value
            newValue instanceof Function
              ? pipe(newValue(previous))
              : pipe(newValue)
        };
      } else {
        return {
          then: () => pipe(previous)
        };
      }
    },

    then: (newValue: ValueType | ((prop: ValueType) => ValueType)) =>
      newValue instanceof Function ? pipe(newValue(previous)) : pipe(newValue),

    valueOf: function() {
      return previous;
    }
  };
}
