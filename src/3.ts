const v: number = 123;
const tf: boolean = 123 > 343;
const msg: string = '하이';

const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];
list.push('a'); // list는 number만 들어갈 수 있기 때문에 에러 발생

// tuple: 배열처럼 생겼지만 각 인덱스별로 타입을 미리 지정해놓음
const tuple: [string, number] = ['123', 123];

