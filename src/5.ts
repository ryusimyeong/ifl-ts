interface Person {
  name: string;
  age: number;
}

// 상속을 위한 extends. 
interface Korean extends Person {
  liveInSeoul: boolean;
}

// type T1 = keyof Person; // T1 = 'name' | 'age'
// keyof 키워드는 타입 값에 존재하는 모든 프로퍼티의 키값을 union 형태로 리턴 받습니다.

// p1, p2라는 개체를 입력 받고, key를 입력받은 다음 해당 key의 value를 서로 바꿔주는 함수
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: '류시명',
  age: 30,
  liveInSeoul: true
}

const p2: Korean = {
  name: '김노엘',
  age: 54,
  liveInSeoul: false
}

swapProperty(p1, p2, 'age');
console.log(p1, p2) // 'age'에 해당하는 value가 변함