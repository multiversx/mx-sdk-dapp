export default function pipe<ValueType>(previous: ValueType) {
  return {
    if: function (condition: boolean) {
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
          then: (value: ValueType | ((prop: ValueType) => ValueType)) =>
            // will not compile if value is not used
            value ? pipe(previous) : pipe(previous)
        };
      }
    },
    valueOf: function () {
      return previous;
    }
  };
}
