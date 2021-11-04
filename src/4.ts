interface Person {
  name: string;
  age: number;
}

// 상속을 위한 extends. 
interface Korean extends Person {
  liveInSeoul: boolean;
}

type T1 = keyof Person;

function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

interface Person {
  name: string;
  age: number;
}

// 상속을 위한 extends. 
interface Korean extends Person {
  liveInSeoul: boolean;
}

type T1 = keyof Person;

function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}