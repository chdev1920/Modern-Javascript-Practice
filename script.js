let password = "OpenSeasameOrSomething99"

if(password.length >= 10 
  && (password.includes('1')
  || password.includes('2')
  || password.includes('3')
  || password.includes('4')
  || password.includes('5')
  || password.includes('6')
  || password.includes('7')
  || password.includes('8')
  || password.includes('9')
  || password.includes('0'))){
  console.log("it's strong");
} else if(password.length >= 5){
  console.log('not long enough');
} else {
  console.log('not long enough');
}