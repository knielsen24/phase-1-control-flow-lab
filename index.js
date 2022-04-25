
function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!";
  }
  else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
  return "No can do.";
  }
}

function ternaryCheckCity(city){
  const ans = city === "NYC" ? "Ok, sounds good." : "No go.";
  return ans;
}

console.log(ternaryCheckCity);


function switchOnCharmFromTip(tip){
  switch (tip) {
    case tip = "generous":
      return "Thank you so much.";
    case tip = "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}