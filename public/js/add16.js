let button = document.querySelector(".button");
let fd = document.querySelector(".firstDigit").value;
let second = document.querySelector(".secondDigit").value;

let firstAns;
// function for first Number ===============================================================================
let firstNumber = function(digit,numberSystem,numberPosition) {
  if (digit < 0 || digit[0] === "-") {
    // removing + and - sign using Math Absulate
    let b;
    if(numberSystem === "Decimal") {
      var str = Math.abs(digit);
      b = str.toString(2);
    }
    else if(numberSystem === "Hexadecimal"){
        b = parseInt(digit,16).toString(2).replace("-","0");
    }
    else if(numberSystem === "Octal"){
        b = parseInt(digit,8).toString(2).replace("-","0");
    }
    else if(numberSystem === "Binary") {
      b = digit.replace("-","0");
    }

    let repeat = "0";
    // filling up all empty with zeros
    let zeros = repeat.repeat(16 - b.length) + b;
    // pringting the result
    // console.log(zeros);
    // converting all digits to a array just for using map method
    let what = zeros.split("");
    // Priting array
    // console.log(what);
    // Making the binarys to 1's Compliment by interchanging
    let onescompliment = what.map(function(value, i) {
      if (value === "0") {
        value = 1;
        return value;
      } else if (value === "1") {
        value = 0;
        return value;
      }
    })
    // converting arrays to string with join
    let ekerpo = Number(onescompliment.join(""));
    // console.log(ekerpo);
    // BInary to decimal conversion with parseInt
    let decimal = parseInt(ekerpo, 2) + 1;
    firstAns = decimal.toString(2);
    document.querySelector('.firstNumber').innerHTML = `<p class="message">দুই এর পরিপূরক করতে হবে<p>${document.querySelector('.firstDigit').value.replace("-","")} = ${zeros} <br>
    ${ekerpo} <br> +1 <br> ------------------------------ <br> <span class="firstAnswer ws"><span class="fa">${firstAns}</span><br></span><br>`
    // console.log(decimal);
  } else {
    // var str = Math.abs(digit);
    // let b = str.toString(2);
    let b;
    if(numberSystem === "Decimal") {
      var str = Math.abs(digit);
      b = str.toString(2);
    }
    else if(numberSystem === "Hexadecimal"){
        b = parseInt(digit,16).toString(2).replace("-","0");
    }
    else if(numberSystem === "Octal"){
        b = parseInt(digit,8).toString(2).replace("-","0");
    }
    else if(numberSystem === "Binary") {
      b = digit.replace("-","0");
    }
    let repeat = "0";
    // filling up all empty with zeros
    let zeros = repeat.repeat(16 - b.length) + b;
    // pringting the result
    // console.log(zeros);
    let positiveFirst = `<p class="message">দুই এর পরিপূরক করতে হবেনা<p><span class="firstAnswer ws">${document.querySelector('.firstDigit').value.replace("-","")} = <span class="fa">${zeros}</span></span>`;
    document.querySelector('.firstNumber').innerHTML = positiveFirst;
  }
}








// function for second Number ===============================================================================
let secondNumber = function(digit,numberSystem,numberPosition) {
  if (digit < 0 || digit[0] === "-") {
    // removing + and - sign using Math Absulate
    let b;
    if(numberSystem === "Decimal") {
      var str = Math.abs(digit);
      b = str.toString(2);
    }
    else if(numberSystem === "Hexadecimal"){
        b = parseInt(digit,16).toString(2).replace("-","0");
    }
    else if(numberSystem === "Octal"){
        b = parseInt(digit,8).toString(2).replace("-","0");
    }
    else if(numberSystem === "Binary") {
      b = digit.replace("-","0");
    }

    let repeat = "0";
    // filling up all empty with zeros
    let zeros = repeat.repeat(16 - b.length) + b;
    // pringting the result
    // console.log(zeros);
    // converting all digits to a array just for using map method
    let what = zeros.split("");
    // Priting array
    // console.log(what);
    // Making the binarys to 1's Compliment by interchanging
    let onescompliment = what.map(function(value, i) {
      if (value === "0") {
        value = 1;
        return value;
      } else if (value === "1") {
        value = 0;
        return value;
      }
    })
    // converting arrays to string with join
    let ekerpo = Number(onescompliment.join(""));
    // console.log(ekerpo);
    // BInary to decimal conversion with parseInt
    let decimal = parseInt(ekerpo, 2) + 1;
    secondAns = decimal.toString(2);
    document.querySelector('.secondNumber').innerHTML = `<p class="message">দুই এর পরিপূরক করতে হবে<p>+${document.querySelector('.secondDigit').value.replace("-","")} = ${zeros} <br>
    ${ekerpo} <br> +1 <br> ------------------------------ <br><span class="secondAnswer ws"> <span class="sa">${secondAns}</span><br></span><br>`
    // console.log(decimal);
  } else {
    // var str = Math.abs(digit);
    // let b = str.toString(2);
    let b;
    if(numberSystem === "Decimal") {
      var str = Math.abs(digit);
      b = str.toString(2);
    }
    else if(numberSystem === "Hexadecimal"){
        b = parseInt(digit,16).toString(2).replace("-","0");
    }
    else if(numberSystem === "Octal"){
        b = parseInt(digit,8).toString(2).replace("-","0");
    }
    else if(numberSystem === "Binary") {
      b = digit.replace("-","0");
    }
    let repeat = "0";
    // filling up all empty with zeros
    let zeros = repeat.repeat(16 - b.length) + b;
    // pringting the result
    // console.log(zeros);
    document.querySelector('.secondNumber').innerHTML = `<p class="message">দুই এর পরিপূরক করতে হবেনা<p><span class="secondAnswer ws">${document.querySelector('.secondDigit').value.replace("-","")} = <span class="sa">${zeros}</span></span>`
  }
}



let htmlOutput = "";
button.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".same").textContent = `(${document.querySelector(".firstDigit").value}) + (${document.querySelector(".secondDigit").value})`;


  let firstType = document.querySelector(".select1").value;
  let secondType = document.querySelector(".select2").value;
  // functon call for first input number
  firstNumber(document.querySelector(".firstDigit").value, firstType,"first");
  // functon call for second input number
  secondNumber(document.querySelector(".secondDigit").value, secondType,"second");
  // console.log(zeros);
  let htmlOutput = document.querySelector(".firstNumber").textContent;
  let firstAnswer = document.querySelector(".firstAnswer");
  let secondAnswer = document.querySelector(".secondAnswer");


  if(firstAnswer != null){
  let negNum1 = document.querySelector('.firstDigit').value < 0 || document.querySelector('.firstDigit').value[0] === "-" ? document.querySelector('.firstDigit').value + " =" : "";
  document.querySelector(".oddEven1").textContent = `${negNum1} ${firstAnswer.textContent}`;
  }

  if(secondAnswer != null){
    let negNum2 = document.querySelector('.secondDigit').value < 0 || document.querySelector('.secondDigit').value[0] === "-" ? document.querySelector('.secondDigit').value + " =" : "";
    document.querySelector(".oddEven2").textContent = `${negNum2} ${secondAnswer.textContent}`;
  }


let f = document.querySelector(".fa").textContent;
let s = document.querySelector(".sa").textContent;
console.log(f,s);
  // var binary = firstAnswer;
  let decimalSum = parseInt(f, 2) + parseInt(s, 2);
  let binarySum = decimalSum.toString(2);

  if(binarySum.length === 17){
    let arb = binarySum.substring(1);
    binarySum = arb;
  }

  let zeroo = "0";
  // filling up all empty with zeros
  let withzero = zeroo.repeat(16 - binarySum.length) + binarySum;
  if(withzero[0] === "0"){
      document.querySelector(".oddEven3").textContent = withzero;
      let finala1 = parseInt(binarySum, 2);
      document.querySelector(".answerDecimal").textContent = `Decimal = (+${finala1})`;
      document.querySelector(".answerOctal").textContent = `Octal = (+${finala1.toString(8)})`;
      document.querySelector(".answerHexadecimal").textContent = `Hexadecimal = (+${finala1.toString(16)})`;
      document.querySelector(".oddEven4").textContent = "";
      document.querySelector(".oddEven5").textContent = "";
      document.querySelector(".oddEven6").textContent = "";
      document.querySelector(".oddEven7").textContent = "";
  }else if (withzero[0] === "1"){
      document.querySelector(".oddEven3").textContent = withzero;
      // making array to interchange
      let okk = withzero.split("");
      let arok = okk.map(function(any,i){
        if(any == "0"){
          return any = 1;
        }else{
          return any = 0;
        }
      }).join("");
      document.querySelector(".oddEven4").textContent = arok;
      document.querySelector(".oddEven5").textContent = "+1";
      document.querySelector(".oddEven7").textContent = "---------------------------------";
      let finala = parseInt(arok, 2) + 1;
      document.querySelector(".answerDecimal").textContent = `Decimal = (-${finala})`;
      document.querySelector(".answerOctal").textContent = `Octal = (-${finala.toString(8)})`;
      document.querySelector(".answerHexadecimal").textContent = `Hexadecimal = (-${finala.toString(16)})`;
      // filling up all empty with zeros
      let withzero2 = zeroo.repeat(16 - finala.toString(2).length) + finala.toString(2);
      document.querySelector(".oddEven6").textContent = withzero2;
  }

  // console.log(withzero);

});


let anyany = "5469";
console.log(anyany[0]);
// let htmlOutput = document.querySelector(".firstNumber").textContent;
// console.log(htmlOutput);
// console.log(zeros);


// var a = str.toString();

// var c = str.toString(8);
// var d = str.toString(16);
