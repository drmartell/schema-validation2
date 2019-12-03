const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
  castToArray,
} = require('../lib/types.js');

const Validator = require('../lib/Validator.js');
const Schema = require('../lib/Schema.js');

const schema = new Schema({
  dog: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

const rover = {
  name: 'rover',
  age: '10'
};

const who = {
  age: 'hi'
};

schema.validate(spot); // returns { name: 'spot', age: 5, weight: '20 lbs' }
schema.validate(rover); // returns { name: 'rover', age: 10 };'
schema.validate(who); // throws a errors about name being required and age not being a number

const nameValidator1 = new Validator('name', { type: String, required: true });
const nameValidator2 = new Validator('name', { type: String, required: false });

describe('validator module', () => {
  describe('validate method', () => {
    it('returns a fields value when required', () => expect(nameValidator1.validate(dog1)).toEqual('spot'));
    it('returns a fields value when not required', () => expect(nameValidator2.validate(dog1)).toEqual('spot'));
    it('returns a fields value when required and needs casting', () => expect(nameValidator1.validate(dog2)).toEqual('55'));
    it('returns a fields value when not required and needs casting', () => expect(nameValidator2.validate(dog2)).toEqual('55'));
    it('throws an error when required and missing', () => expect(() => nameValidator1.validate(dog3)).toThrow());
    it('throws an error when not required and missing', () => expect(() => nameValidator2.validate(dog3)).toThrow());
  });
});
