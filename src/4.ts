export { };

// 현재 v1은 undefined만 가능하다.
let v1: undefined = undefined;
let v2: null = null;
v1 = 123;

// 보통 undefined와 null은 다른 타입과 같이 사용한다.
// | 는 유니온 타입으로, or다.
// v3는 number와 undefined를 지정할 수 있다.
let v3: number | undefined = undefined;
v3 = 123;

// 자바스크립트에서 undefined는 undefined라는 타입으로 지정이 되어 있지만, null은 object로 되어 있다. -> undefined만 사용하는 게 좋음

let n1: 10 | 20 | 30;
n1 = 10;
n2 = 15; // error

let str: '백' | '프론트';
str = '프론트';
str = '미들'; // error

// any 타입은 모든 타입을 지정할 수 있다.
// JS -> TS로 마이그레이션 하는 경우에 유용하게 쓰일 수 있다. 
// 타입에러가 나는 부분을 any로 설정해두고 차근히 타이핑 해나가면 된다.
// 타입을 알 수 없는 경우, 타입 정의가 안된 외부 패키지를 사용하는 경우에 사용한다.
// any를 남발하면 TSf를 사용하는 의미가 퇴색되기 때문에 남발하지 않도록 한다.
let some: any;
some = 123;
some = "123";
some = () => { };

// 함수의 반환 타입
// void: 아무것도 반환하지 않고 함수가 종료될 때.
function f1(): void {
  console.log('hello');
}

// never: 항상 예외가 발생하여 비정상적으로 함수가 종료될 때
function f2(): never {
  throw new Error('some error');
}

// never: 무한루프 때문에 종료되지 않는 함수
function f3(): never {
  while (true) {
    // TODO
  }
}
// never는 거의 사용되지 않음

function f4(): string {
  return '123';
}

function f5(): string {
  return 123; // error
}


// object 정의
let obj: object;
obj = { name: 'abc' };
console.log(obj.name) // 속성 타입 정보가 입력되지 않아서 접근할 수 없음

// 속성정보를 포함해서 object의 타입 정보를 입력하려면 interface를 써야 함

// 유니온( | )과 인터섹션( & )
let foo: (1 | 3 | 5) & (3 | 5 | 7);
foo = 3;
foo = 5;
foo = 1; // error
foo = 7; // error

// type 키워드를 이용하여 타입에 별칭 넣기
type Width = number | string;
let wid: Width;
wid = 100;
wid = '100';
wid = true; // error