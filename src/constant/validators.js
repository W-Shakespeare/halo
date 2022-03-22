export const validatorsName = [
  {
    name: "Only Text",
    func: (value) => (/^[a-zа-яё]+$/i.test(value) ? true : false),
    errorMessage: "Only letters allowed",
    onEvent: "onChange",
  },
  {
    name: "Max Length",
    func: (value) => (value?.length <= 3 ? true : false),
    errorMessage: "Should contain 3 characters",
    onEvent: "onBlur",
  },
];
// if return false, i show errorMessage

export const validatorsNumber = [
  {
    name: "Only Numbers",
    func: (value) => (/^\d+$/.test(value) ? true : false),
    errorMessage: "Only numbers allowed",
    onEvent: "onBlur",
  },
  {
    name: "Max Length",
    func: (value) => (value?.length <= 12 ? true : false),
    errorMessage: "Should contain 12 characters",
    onEvent: "onChange",
  },
  {
    name: "Not  number 4",
    func: (value) => (value == 4 ? false : true),
    errorMessage: "Not number 4",
    onEvent: "onChange",
  },
];
// if return false, i show errorMessage
