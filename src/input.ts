// node.js에 포함된 모듈. @types/node에 있는 타입 정보를 활용한다.
import readline from 'readline';

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function waitForInput(msg: string) {
  return new Promise(res =>
    readlineInterface.question(msg, name => {
      res(name);
    }))
}