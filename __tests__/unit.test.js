// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("isPhoneNumber - true cases", () => {
  expected(isPhoneNumber('123-456-7890')).toBe(true);
  expected(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test("isPhoneNumber - false cases", () => {
  expected(isPhoneNumber('1234567890')).toBe(false);
  expected(isPhoneNumber('phone567')).toBe(false);
});

test("isEmail - true cases", () => {
  expected(isEmail('user@gmail.com')).toBe(true);
  expected(isEmail('testing@example.com')).toBe(true);
});

test("isEmail - false cases", () => {
  expected(isEmail('user@email')).toBe(false);
  expected(isEmail('user.email')).toBe(false);
});

test("isStrongPassword - true cases", () => {
  expected(isStrongPassword('VeryLongPW@1234')).toBe(true);
  expected(isStrongPassword('LongEnough@5678')).toBe(true);
});

test("isStrongPassword - false cases", () => {
  expected(isStrongPassword('abc')).toBe(false);
  expected(isStrongPassword('000')).toBe(false);
});

test("isDate - true cases", () => {
  expected(isDate('01/01/2020')).toBe(true);
  expected(isDate('02/19/2020')).toBe(true);
});

test("isHexColor - false cases", () => {
  expected(isDate('2020/01/01')).toBe(false);
  expected(isDate('2020/19/2')).toBe(false);
});

test("isHexColor - true cases", () => {
  expected(isHexColor('#FFFFFF')).toBe(true);
  expected(isHexColor('#89CFF0')).toBe(true);
});

test("isHexColor - false cases", () => {
  expected(isHexColor('blue')).toBe(false);
  expected(isHexColor('123456')).toBe(false);
});


