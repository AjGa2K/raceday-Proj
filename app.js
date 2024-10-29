let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 24;

if(runnersAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly === true){
  console.log('Runner will race at 9:30am.');
  console.log(raceNumber);
} else if(runnersAge > 18 && registeredEarly === false){
  console.log('Runner will race at 11:00am.');
  console.log(raceNumber);
} else if(runnersAge < 18){
  console.log('Youth registrants run at 12:30pm.')
  console.log(raceNumber);
} else{
  console.log('See the registration desk.');
  console.log('No number assigned.')
}


