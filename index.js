


let a1 = 0;
let a2 = 0;
let a3 = "";

let q11 = function () {
  a1 = 1;
  document.getElementById("black11").innerText = "";
  document.getElementById("black12").innerText = "2. 전체주의";
  document.getElementById("black13").innerText = "3. 자본주의";
  document.getElementById("black14").innerText = "4. 발빠짐주의";
  document.getElementById("sel11").innerText = "1. 공산주의";
  document.getElementById("sel12").innerText = "";
  document.getElementById("sel13").innerText = "";
  document.getElementById("sel14").innerText = "";
  document.getElementById("pre11").innerText = " (선택됨)";
  document.getElementById("pre12").innerText = "";
  document.getElementById("pre13").innerText = "";
  document.getElementById("pre14").innerText = "";
  reset1();
};

let q12 = function () {
  a1 = 2;
  document.getElementById("black11").innerText = "1. 공산주의";
  document.getElementById("black12").innerText = "";
  document.getElementById("black13").innerText = "3. 자본주의";
  document.getElementById("black14").innerText = "4. 발빠짐주의";
  document.getElementById("sel11").innerText = "";
  document.getElementById("sel12").innerText = "2. 전체주의";
  document.getElementById("sel13").innerText = "";
  document.getElementById("sel14").innerText = "";
  document.getElementById("pre11").innerText = "";
  document.getElementById("pre12").innerText = " (선택됨)";
  document.getElementById("pre13").innerText = "";
  document.getElementById("pre14").innerText = "";
  reset1();
};

let q13 = function () {
  a1 = 3;
  document.getElementById("black11").innerText = "1. 공산주의";
  document.getElementById("black12").innerText = "2. 전체주의";
  document.getElementById("black13").innerText = "";
  document.getElementById("black14").innerText = "4. 발빠짐주의";
  document.getElementById("sel11").innerText = "";
  document.getElementById("sel12").innerText = "";
  document.getElementById("sel13").innerText = "3. 자본주의";
  document.getElementById("sel14").innerText = "";
  document.getElementById("pre11").innerText = "";
  document.getElementById("pre12").innerText = "";
  document.getElementById("pre13").innerText = " (선택됨)";
  document.getElementById("pre14").innerText = "";
  reset1();
};

let q14 = function () {
  a1 = 4;
  document.getElementById("black11").innerText = "1. 공산주의";
  document.getElementById("black12").innerText = "2. 전체주의";
  document.getElementById("black13").innerText = "3. 자본주의";
  document.getElementById("black14").innerText = "";
  document.getElementById("sel11").innerText = "";
  document.getElementById("sel12").innerText = "";
  document.getElementById("sel13").innerText = "";
  document.getElementById("sel14").innerText = "4. 발빠짐주의";
  document.getElementById("pre11").innerText = "";
  document.getElementById("pre12").innerText = "";
  document.getElementById("pre13").innerText = "";
  document.getElementById("pre14").innerText = " (선택됨)";
  reset1();
};

let q21 = function () {
  a2 = 1;
  document.getElementById("black21").innerText = "";
  document.getElementById("black22").innerText = "2. 소비자";
  document.getElementById("black23").innerText = "3. 분해자";
  document.getElementById("black24").innerText = "4. 범죄자";
  document.getElementById("sel21").innerText = "1. 생산자";
  document.getElementById("sel22").innerText = "";
  document.getElementById("sel23").innerText = "";
  document.getElementById("sel24").innerText = "";
  document.getElementById("pre21").innerText = " (선택됨)";
  document.getElementById("pre22").innerText = "";
  document.getElementById("pre23").innerText = "";
  document.getElementById("pre24").innerText = "";
  reset2();
};

let q22 = function () {
  a2 = 2;
  document.getElementById("black21").innerText = "1. 생산자";
  document.getElementById("black22").innerText = "";
  document.getElementById("black23").innerText = "3. 분해자";
  document.getElementById("black24").innerText = "4. 범죄자";
  document.getElementById("sel21").innerText = "";
  document.getElementById("sel22").innerText = "2. 소비자";
  document.getElementById("sel23").innerText = "";
  document.getElementById("sel24").innerText = "";
  document.getElementById("pre21").innerText = "";
  document.getElementById("pre22").innerText = " (선택됨)";
  document.getElementById("pre23").innerText = "";
  document.getElementById("pre24").innerText = "";
  reset2();
};

let q23 = function () {
  a2 = 3;
  document.getElementById("black21").innerText = "1. 생산자";
  document.getElementById("black22").innerText = "2. 소비자";
  document.getElementById("black23").innerText = "";
  document.getElementById("black24").innerText = "4. 범죄자";
  document.getElementById("sel21").innerText = "";
  document.getElementById("sel22").innerText = "";
  document.getElementById("sel23").innerText = "3. 분해자";
  document.getElementById("sel24").innerText = "";
  document.getElementById("pre21").innerText = "";
  document.getElementById("pre22").innerText = "";
  document.getElementById("pre23").innerText = " (선택됨)";
  document.getElementById("pre24").innerText = "";
  reset2();
};

let q24 = function () {
  a2 = 4;
  document.getElementById("black21").innerText = "1. 생산자";
  document.getElementById("black22").innerText = "2. 소비자";
  document.getElementById("black23").innerText = "3. 분해자";
  document.getElementById("black24").innerText = "";
  document.getElementById("sel21").innerText = "";
  document.getElementById("sel22").innerText = "";
  document.getElementById("sel23").innerText = "";
  document.getElementById("sel24").innerText = "4. 범죄자";
  document.getElementById("pre21").innerText = "";
  document.getElementById("pre22").innerText = "";
  document.getElementById("pre23").innerText = "";
  document.getElementById("pre24").innerText = " (선택됨)";
  reset2();
};

let reset1 = function () {
  document.getElementById("red11").innerText = "";
  document.getElementById("red12").innerText = "";
  document.getElementById("red13").innerText = "";
  document.getElementById("red14").innerText = "";


  document.getElementById("qre11").innerText = "";
  document.getElementById("qre12").innerText = "";
  document.getElementById("qre13").innerText = "";
  document.getElementById("qre14").innerText = "";
}

let reset2 = function () {

document.getElementById("red21").innerText = "";
document.getElementById("red22").innerText = "";
document.getElementById("red23").innerText = "";
document.getElementById("red24").innerText = "";

  document.getElementById("qre21").innerText = "";
  document.getElementById("qre22").innerText = "";
  document.getElementById("qre23").innerText = "";
  document.getElementById("qre24").innerText = "";
}


let p1 = 0;
let p2 = 0;
let p3 = 0;
let total = 0;

function saveAnswer(event) {
  event.preventDefault();
    a3 = document.getElementById("comment").value;

    document.getElementById("qO1").innerText = "";
    document.getElementById("qO2").innerText = "";
    document.getElementById("qO3").innerText = "";
    document.getElementById("qX1").innerText = "";
    document.getElementById("qX2").innerText = "";
    document.getElementById("qX3").innerText = "";

    switch (a1) {
      case 1:
        document.getElementById("sel11").innerText = "";
        document.getElementById("red11").innerText = "1. 공산주의";
        document.getElementById("pre11").innerText = "";
        document.getElementById("qre11").innerText = " (선택됨)";
        document.getElementById("qX1").innerText = "Quiz1. 지하철이 믿는 사상은? (1점)";
          break;
      case 2:
            document.getElementById("sel12").innerText = "";
            document.getElementById("red12").innerText = "2. 전체주의";
            document.getElementById("pre12").innerText = "";
        document.getElementById("qre12").innerText = " (선택됨)";
        document.getElementById("qX1").innerText = "Quiz1. 지하철이 믿는 사상은? (1점)";
              break;
              case 3:
        document.getElementById("sel13").innerText = "";
        document.getElementById("red13").innerText = "3. 자본주의";
        document.getElementById("pre13").innerText = "";
        document.getElementById("qre13").innerText = " (선택됨)";
        document.getElementById("qX1").innerText = "Quiz1. 지하철이 믿는 사상은? (1점)";
          break;
          case 4:
        document.getElementById("sel14").innerText = "";
        document.getElementById("red14").innerText = "4. 발빠짐주의";
        document.getElementById("pre14").innerText = "";
        document.getElementById("qre14").innerText = " (선택됨)";
        document.getElementById("qO1").innerText = "Quiz1. 지하철이 믿는 사상은? (1점)";
        p1 = 1;
          break;
          default:
            document.getElementById("qX1").innerText = "Quiz1. 지하철이 믿는 사상은? (1점)";
    }

    
    switch (a2) {
      case 1:
        document.getElementById("sel21").innerText = "";
        document.getElementById("red21").innerText = "1. 생산자";
        document.getElementById("pre21").innerText = "";
        document.getElementById("qre21").innerText = " (선택됨)";
        document.getElementById("qX2").innerText = "Quiz2. 한우를 해외로 수출할 때 필요한 것은? (1점)";
          break;
      case 2:
            document.getElementById("sel22").innerText = "";
            document.getElementById("red22").innerText = "2. 소비자";
            document.getElementById("pre22").innerText = "";
            document.getElementById("qre22").innerText = " (선택됨)";
            document.getElementById("qO2").innerText = "Quiz2. 한우를 해외로 수출할 때 필요한 것은? (1점)";
            p2 = 1;
              break;
              case 3:
        document.getElementById("sel23").innerText = "";
        document.getElementById("red23").innerText = "3. 분해자";
        document.getElementById("pre23").innerText = "";
        document.getElementById("qre23").innerText = " (선택됨)";
        document.getElementById("qX2").innerText = "Quiz2. 한우를 해외로 수출할 때 필요한 것은? (1점)";
          break;
          case 4:
        document.getElementById("sel24").innerText = "";
        document.getElementById("red24").innerText = "4. 범죄자";
        document.getElementById("pre24").innerText = "";
        document.getElementById("qre24").innerText = " (선택됨)";
        document.getElementById("qX2").innerText = "Quiz2. 한우를 해외로 수출할 때 필요한 것은? (1점)";
          break;
          default:
            document.getElementById("qX2").innerText = "Quiz2. 한우를 해외로 수출할 때 필요한 것은? (1점)";
    }

    document.getElementById("q1").innerText = "";
    document.getElementById("q2").innerText = "";
    document.getElementById("q3").innerText = "";

    if (a3 == "어그로") {
      p3 = 1;
      document.getElementById("qO3").innerText = "Quiz3. '물고기가 자란다'를 세 글자로 하면? (1점)";
    }
    else {
      document.getElementById("qX3").innerText = "Quiz3. '물고기가 자란다'를 세 글자로 하면? (1점)";
    }
    total = p1 + p2 + p3;
    alert(total + "점");
}
