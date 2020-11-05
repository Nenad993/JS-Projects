let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
// let radios = document.querySelectorAll("input[name='op']");
let form = document.querySelector("form");
let pRes = document.getElementById("res");

let racunaj = (num1, num2, operacija) => {
   //Izvsim konverziju u numericki podatak
   num1 = Number(num1);
   num2 = Number(num2);
   //Izvrsim validaciju (proverim da li su unosi u zeljenom formatu)
//Number.isInteger(num1) proverava da li je num1 ceo broj
//Number.isFinite(num1) proverava da li je num1 ceo ili decimalan broj
   if(Number.isFinite(num1) && Number.isFinite(num2)){
      //Racunaj
     
      let res = 0;
   
      if(operacija == "+"){
          res = num1 + num2;
      }else if(operacija == "-"){
          res = num1 - num2;
      }else if (operacija == "*"){
          res = num1 * num2;
      }else if(operacija == "/"){
         if(num2 == 0){
            alert("Nije dozvoljeno deliti nulom")
            res ="?";
         } 
         else {
          res = num1 / num2;
         }
      } else {
         alert(`Doslo je do greske!`);
      }
      
      pRes.innerHTML =` ${num1} ${operacija} ${num2} = ${res}`;
      
   }else{
      alert("Unosi moraju biti numericke vrednosti!")

   }
}

form.addEventListener("submit", event => {
   event.preventDefault();
   //Preuzmem iz input polja kao string format
   let num1 = inputNum1.value;
   let num2 = inputNum2.value;

   let radioChecked = document.querySelector("input[name='op']:checked");
   let radioCheckedValue = radioChecked.value;
    racunaj(num1, num2, radioCheckedValue);

});
