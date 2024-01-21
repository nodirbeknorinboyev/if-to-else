//let year =Number(prompt("Biron bir yilni kiriting:"));
//console.log(year);
//if(year==2020)
//console.log("Bu yil hozirgi yil"); 

//let a =Number(prompt("Son kiriting:"));
//if(a > 100) {
    //console.log("Bu yerdagi son 10dan katta>>>>");
    //console.log(`${a} > 100`);
//} else{
  //  console.log("Bu yerdagi son 100dan kichik>>>>");
   // console.log(`${a} < 100`);}

//let a =Number(prompt("Son kiriting"));
//if(a % 2 == 0){
    //console.log("Juft son");
//}else if(a % 2 == 1){
 //   console.log("Toq son");
//}else{
    //console.log("Bu son emas qaytadan tog'ri kiriting");
//}
let a =Number(prompt("Yosingizni kiriting"));
let day;
switch(a){
    case 1: day = "Dushanba";break;
    case 2: day = "Seshanba";break;
    case 3: day = "Chorshanba";break;
    case 4: day = "Payshanba";break;
    case 5: day = "Juma";break;
    case 6: day = "Shanba";break;
    case 7: day = "Yakshanba";break;
    default:day = "Bunday hafta kuni yoq"
}
console.log(day);



