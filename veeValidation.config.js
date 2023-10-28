import { defineRule } from "vee-validate";

const isExist = (val) => !val || (typeof val !== "number" && !val.length);

defineRule("required", (value) => {
  if (isExist(value)) {
    return "This field is required";
  }

  return true;
});

defineRule("email", (value) => {
  // Field is empty, should pass
  if (isExist(value)) {
    return true;
  }

  // Check if email
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return "This field must be a valid email";
  }

  return true;
});

defineRule("minLength", (value, [limit]) => {
  // The field is empty so it should pass
  if (isExist(value)) {
    return true;
  }

  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }

  return true;
});

defineRule("number", (value) => {
  // The field is empty so it should pass
  if (isExist(value)) {
    return true;
  }

  if (isNaN(value)) {
    return `This field must be a number`;
  }

  return true;
});

defineRule("minMax", (value, [min, max]) => {
  // The field is empty so it should pass
  if (isExist(value)) {
    return true;
  }
  const numericValue = Number(value);
  if (numericValue < min) {
    return `This field must be greater than ${min}`;
  }

  if (numericValue > max) {
    return `This field must be less than ${max}`;
  }

  return true;
});
