export const validatorsName = [
  {
    name: "Only Text",
    func: (value) => (/^[a-zа-яё]+$/i.test(value) ? true : false),
    errorMessage: "Only letters allowed",
  },
];
// if return false, i show errorMessage

export const validatorsNumber = [
  {
    name: "Only Numbers",
    func: (value) => (/^\d+$/.test(value) ? true : false),
    errorMessage: "Only numbers allowed",
  },
  {
    name: "Max Length",
    func: (value) => (value.length <= 12 ? true : false),
    errorMessage: "Should contain 12 characters",
  },
  {
    name: "Not  number 4",
    func: (value) => (value == 4 ? false : true),
    errorMessage: "Not number 4",
  },
];
// if return false, i show errorMessage
