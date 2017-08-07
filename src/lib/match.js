import {isNumber, isString, isObject, isBoolean, isArray} from './is';
import {some} from './array';

export default (data) => {
  const actions = [];
  const methods = {};
  const or = methods;
  const value = () => some(actions, action => action(data));
  const orAndValue = {or, value};

  methods.number = () => {
    actions.push(isNumber);
    return orAndValue;
  };
  methods.string = () => {
    actions.push(isString);
    return orAndValue;
  };
  methods.object = () => {
    actions.push(isObject);
    return orAndValue;
  };
  methods.boolean = () => {
    actions.push(isBoolean);
    return orAndValue;
  };
  methods.array = () => {
    actions.push(isArray);
    return orAndValue;
  };

  return methods;
};
