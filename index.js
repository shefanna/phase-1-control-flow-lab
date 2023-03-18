function scuberGreetingForFeet(distance){
  if(distance<400)
    return 'This one is on me!';
  else if (distance>400 && distance < 2000)
    return 'That will be twenty bucks.'
  else if (distance>2000 && distance<2500)
    return 'I will gladly take your thirty bucks.'
    else 
    return 'No can do.'
  
  // Write your code here!
}

function ternaryCheckCity(city){
  return city==='NYC'?'Ok, sounds good.':'No go.'
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let a;
  switch(tip) {
    case "generous":
      a = 'Thank you so much.';
      break;
    case "not as generous":
      a = 'Thank you.';
      break; 
    default:
      a = 'Bye.';
  }
  return a;
  
}