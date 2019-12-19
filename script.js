let apexPred = function(){
  if(document.getElementById("char1").checked) {
    char1();
  }else if(document.getElementById("char2").checked) {
    char2();
  if(document.getElementById("spot1").checked {
    spot1();
  }else if(document.getElementById("spot2").checked) {
    spot2();
  if(document.getElementById("gun1").checked {
    gun1();
  }else if(document.getElementById("gun2").checked) {
    gun2();
  if(document.getElementById("fight1").checked) {
    fight1();
  }else if(document.getElementById("fight2").checked) {
    fight2();
  if(document.getElementById("beacon1").checked) {
    beacon1();
  }else if(document.getElementById("beacon2").checked) {
    beacon2();
  if(document.getElementById("box1").checked {
    box1();
  }else if(document.getElementById("box2").checked) {
    box2();
  if(document.getElementById("sfight1").checked) {
    sfight1();
  }else if(document.getElementById("sfight2").checked) {
    sfight2();
  if(document.getElementById("healup1").checked) {
    healup1();
  }else if(document.getElementById("healup2").checked) {
    healup2();
  if(document.getElementById("aim1").checked) {
    aim1();
  }else if(document.getElementById("aim2").checked) {
    aim2();
  if(document.getElementById("ult1").checked) {
    ult1();
  }else if(document.getElementById("ult2").checked {
    ult2();
  }
  
  };
let matchStart = function(){
  document.getElementById('narrative').innerHTML ="<p>Welcome to the Apex Legends CYOA. Select your Legend";
  document.getElementById('choices').innerHTML ="<input type='radio' id'char1'> Wraith<br><input type='radio' id='char2'>Octane"
};

let char1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose Wraith. Now choose a landing Spot.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'spot1'>Capitol City<br><input type='radio' id='spot2'>Train Yard"
};

let char2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose Octane. Now choose a landing Spot.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'spot1'>Capitol City<br><input type='radio' id='spot2'>Train Yard"
};

let spot1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose Capitol City as your Landing Spot. You just landed now choose a gun";
  document.getElementById('choices').innerHTML ="<input type='radio' id'gun1'>Peacekeeper Shotgun<br><input type='radio' id='gun2'>R301 AR"
};

let spot2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose Train Yard as your Landing Spot. You just landed now choose a gun.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'gun1'>Peacekeeper Shotgun<br><input type='radio' id='gun2'>R301 AR"
};

let gun1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose the PeaceKeeper Shotgun as your weapon. You also found a white shield and a blue helmet. While looting you see that your teammates are fighting a Caustic, Gibraltar, and Pathfinder. They need help.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'fight1'>Caustic<br><input type='radio' id='fight2'>Gibraltar"
};

let gun2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose the R301 Assault rifle as your weapon. You also found a white shield and a blue helmet. While looting you see that your teammates are fighting a Caustic, Gibraltar, and Pathfinder. They need help.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'fight1'> Caustic<br><input type='radio' id='fight2'>Gibraltar"
};

let fight1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to attack the enemy Caustic. He gassed you to death.";
  document.getElementById('choices').innerHTML =""
};

let fight2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to attack the Enemy Gibraltar. You managed to kill him you found a blue shield in his deathbox. While fighting your Teammate Lifeline was killed. The cirlce is closing in. You can revive here or in the circle.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'beacon1'> Revive Here<br><input type='radio' id='beacon2'> Revive in Circle"
};

let beacon1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to revive your Teammate Lifeline out of the cirlce. You lose health to the ring but healup. While heading to the next circle, you find a Gold DeathBox with a Fully Kitted out Charge Rifle and G2 Scout. You can only choose one.";
  document.getElementById('choices').innerHTML ="<iput type='radio' id'box1'>Charge Rifle<br><input type='radio' id='box2'>G2 Scout"
};

let beacon2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to revive your Teammate Lifeline in the cirlce. While heading to the next circle, you find a Gold DeathBox with a Fully Kitted out Charge Rifle and G2 Scout. You can only choose one.";
  document.getElementById('choices').innerHTML ="<imput type='radio' id'box1'>Charge Rifle<br><input type='radio' id='box2'> G2 Scout"
};

let box1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose the Fully Kitted out Charge Rifle from the box. While looting you spot a Bangalore, Mirage, and Octane. You can go after Bangalore or Mirage.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'sfight1'>Bangalore<br><input type='radio' id='sfight2'>Mirage"
};

let box2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose the Fully Kitted out G2 Scout from the box. While looting you spot a Bangalore, Mirage, and Octane. You can go after Bangalore or Pathfinder.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'sfight1'>Bangalore<br><input type='radio' id='sfight2'>Mirage"
};

let sfight1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to go after the Enemy Bangalore. You got lost in her smoke and died to a headshot from a shotgun with a choke attachment to it. Game Over.";
  document.getElementById('choices').innerHTML =""
};

let sfight2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to go After the Enemy Mirage. He tried to get away using his Ult but everyone knows that mirage is a low tier pick so you killed him. You find a drained purple shield, ammo, and healing items in his Deathbox. You need to heal, you can use a Phoenix Kit or heal the old way.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'healup1'>Phoenix Kit<br><input type='radio' id='healup2'>Old Way"
};

let healup1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to use the Phoenix Kit to fully heal your health. You move into the Final Circles, the last team is waiting for you there. Theres a Wattson, Pathfinder,and Bloodhound. You can aim at Wattson or Pathfinder";
  document.getElementById('choices').innerHTML ="<input type='radio' id'aim1'> Wattson<br><input type='radio' id='aim2'>Pathfinder"
};

let healup2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to use a Shield Battery and a MedKit to heal your health. You move into the Final Circles, the last team is waiting for you there. Theres a Wattson, Pathfinder,and Bloodhound. You can aim at Wattson or Pathfinder";
  document.getElementById('choices').innerHTML ="<input type='radio' id'aim1'> Wattson<br><input type='radio' id='aim2'>Pathfinder"
};

let aim1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to aim at the Wattson. You downed them with your weapon. You can either use your ult to charge them or get a teammate to ult.";
  document.getElementById('choices').innerHTML ="<input type='radio' id'ult1'>Your Ult<br><input type='radio' id='ult2'>Teammate Ult"
};

let aim2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to aim at the Pathfinder, but their Bloodhound had managed to get behind you guys and slaughter you with his R-99 while he Ult-ed. Game Over.";
  document.getElementById('choices').innerHTML =""
};
let ult1 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to tell the Gibrator to Ult and his Missle Barrage manged to kill the rest of the team. You are the Apex Champions. You ended the game with 2 Kills.";
  document.getElementById('choices').innerHTML =""
};

let ult2 = function(){
  document.getElementById("narrative").innerHTML ="You Chose to Use your Ult but it is too late they already started to rush you and overwhelmed you. Game Over.";
  document.getElementById('choices').innerHTML =""
};