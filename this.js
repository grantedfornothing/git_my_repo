/*
this. 를 안 붙이면 reference Error가 뜨는데
위에 선언을 했음에도 불구하고 왜 에러가 뜨는지 원인 찾아보기
*/

var footballPlayer = {
    name: "손흥민", // name property
    age: 31, // age property
    height: 183, // height property
    team: "Tottenham Hotspurs", // team property
    teamCode: "153", // teamCode property
    backNumber: "7", // number property
    playerId: function(){ //playerId = teamCode + backNumber
        return this.teamCode+this.backNumber;
        /* 
        여기서 this를 사용하지 않으면,
        teamCode와 backNumber라는 이름을 갖는 외부 변수를 참조하게 된다.
        this는 '현재 객체'를 나타내고, footballPlayer.playerId()가 실행되는 동안
        this는 footballPlayer를 나타내는 것이다.
        자바스크립트의 this는 런타임에 따라 결정된다.
        다시말해 context에 따라 참조하는 값이 달라진다는 것.
        */
    },  
}

console.log(footballPlayer.playerId()); // 1537


// 이번엔 호출 시점에 따라 결정되는 this의 특성에 대해 알아보자

function noUser(){
    return {
        name: "James",
        ref: this
    };
};

let user = noUser();

alert(user.ref.name); // Error (메서드가 아닌 함수로 호출되었기 때문)]

// 위처럼 에러가 발생하지 않도록 하려면 아래와 같이 수정하면 된다

function noUser1(){
    return{
        name: "Carlos",
        ref(){
            return this;
        }
    };
};

let user1 = noUser1();

alert(user1.ref().name); // Carlos