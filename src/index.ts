export const addNumbers = (a: number, b: number) => {
  return a + b;
};

const cmToM = (cm: number) => {
  return cm / 100;
};

const divideNumbers = (a: number, b: number) => {
  return a / b;
};

const squareNumber = (value: number) => {
  return value * value;
};

export const calculateBMI = (kg: number, cm: number) => {
  const meters = cmToM(cm);
  const squareMeters = squareNumber(meters);

  return divideNumbers(kg, squareMeters);
};

export const newFeature = () => false;
