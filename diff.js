//어떨 때 값이 null이나 undefined로 저장되는지 작성해보기


/* 1. 변수 선언 후 값을 할당하지 않은 경우 undefined
      명시적으로 빈 값을 할당한 경우 null */
let variable1; // undefined로 저장
let variable2 = null; // null로 저장

console.log(variable1);
console.log(variable2);

// 2. 객체 내 존재하지 않은 property에 접근할 경우 undefined
let a = {key: "value"};
let b = a.parameter;

console.log(b);

//3. 배열 내 존재하지 않는 인덱스의 경우 undefined
let arr = ["a","b","c"];
let find = arr[5];

console.log(find);

//4. 함수에서 값을 반환하지 않는 경우 undefined
function noReturn(){
    //아무 값도 반환하지 않음
}
let result = noReturn();

console.log(result);

//5. 객체 내 property가 명시적으로 null인 경우
let c = {prop:null};

console.log(c.prop);

//6. 존재하지 않는 변수를 참조할 경우
console.log(valueNotExist);


