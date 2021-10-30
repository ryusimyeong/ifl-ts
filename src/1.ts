interface YearPricaMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPricaMap = {};

yearMap[1998] = 1000; // key가 숫자일 때는 number만 가능
yearMap[1998] = 'abc'; // error
yearMap['2000'] = 1000; // key가 문자열일 때는 number, string 모두 가능
yearMap['1000'] = '1000'; // error
yearMap['ten'] = '1000'; // key가 문자열일 때는 number, string 모두 가능
