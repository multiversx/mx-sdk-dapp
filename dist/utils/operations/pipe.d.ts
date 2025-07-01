export declare function pipe<ValueType>(previous: ValueType): {
    if: (condition: boolean) => {
        then: (newValue: ValueType | ((prop: ValueType) => ValueType)) => any;
    };
    then: (newValue: ValueType | ((prop: ValueType) => ValueType)) => any;
    valueOf: () => ValueType;
};
//# sourceMappingURL=pipe.d.ts.map