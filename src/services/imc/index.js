import EventEmitter from 'eventemitter2';

let imc = new EventEmitter();
export function setImc(IMC) {
  imc = IMC;
}
export function getImc() {
  return imc;
}
