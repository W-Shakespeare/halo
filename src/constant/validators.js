export const validatorsName = [
  {
    name: "OnlyText",
    func: (value) => (/^[a-zа-яё]+$/i.test(value) ? true : false),
    errorMessage: "Only letters allowed",
  },
];

export const validatorsNumber = [
  {
    name: "onlyNumbers",
    func: (value) => (/^\d+$/.test(value) ? true : false),
    errorMessage: "Only numbers allowed",
  },
  {
    name: "maxLenght",
    func: (value) => (value.length <= 3 ? true : false),
    errorMessage: "Should contain 12 characters",
  },
];

// var obj = {
//   func: (value) => (/^\d+$/.test(value) ? true : false),
// };

// console.log(obj.func("22"));
