//us attack - alien attack - who gets destroyed first? if you kill alien, you get option to retreat or coninue to nextr ound 
// USS hull - 20  firepower -5 accuracy -.7
//alien hull 3-6 firepower2-4 accuracy .6-.8




class Ship{
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
}

class UssSchwartzenegger extends Ship{
    constructor(hull,firepower,accuracy){
    super(hull,firepower,accuracy);
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7;
    }

    attack(op){
        if(this.accuracy > Math.random() && (this.hull >0)){
            op.hull -= this.firepower 
            alert("YOU HIT WITH " + this.firepower)
            if(op.hull <= 0){
                op.alive = false;
                alert("Alien has been KILLED")
            }
        }  
        else{
            alert("YOU MISSED")
        }
    }
}

 class Alien extends Ship{
    constructor(hull,firepower,accuracy){
    super(hull,firepower,accuracy)
    this.hull = Math.floor(Math.random()*4) +3;
    this.firepower = Math.floor(Math.random()*3)+2;
    this.accuracy = (Math.floor(Math.random()*3)+6)/10;
    }   

    attack(op1){
        if(this.accuracy > Math.random()){
            op1.hull -= this.firepower;
            alert("YOU HAVE BEEN HIT WITH " + this.firepower)
            if(op1.hull <= 0){
                op1.alive = false;
                alert("YOU HAVE BEEN KILLED BY ALIEN")
            }
        }
        else{
            alert("THEY MISSED")
        }
        
    }
}


function checkWin(hero, vArr){
    let dead = false
        for(let i = 0; i<vArr.length; i++){
            if(vArr[i].alive == false && (hero.alive)){
                dead = true 
            }
        }
        if(dead == true && vShips.length == kill){
            alert("YOU WIN!!!!!!")
        }
        if(hero.alive == false){
            alert("YOU LOSE")
        }
}
//function start game-
function startGame(hero, vArr){
    for(let i = 0; i<vArr.length; i++){
        if(hero.alive){ 
            console.log("SHIP: " + (i+1) )
            while(vArr[i].alive){  //while ship # x is alive-- we(h, hero) attck ship x 
                hero.attack(vArr[i])
                document.getElementById('vStats').innerHTML = "Hull: " + vArr[i].hull + "<br>" + "Power: "+ vArr[i].firepower + "<br>" + "Accuracy:" + vArr[i].accuracy ;
                if(vArr[i].alive){
                    vArr[i].attack(hero)
                        document.getElementById('hStats').innerHTML = "Hull: " + hero.hull + "<br>" + "Power: "+ hero.firepower + "<br>"+ "Accuracy:" + hero.accuracy;
                    if (hero.alive == false){
                        break;
                    }
                }
            } 
        }
        kill++
        let retreat = confirm("New Enemy Ship... Retreat? yes- Confirm or no- Cancel ")
            if(retreat == true){
              break;
            }  
    }
}
//when a new ship is created, alert for retreat 
const makeEnemies = (x) => {
    for(let i =0; i<x; i++ ){
        vShips[i] = new Alien() //making new alien ships and adding it to the array 
    }
}

let hero1 = new UssSchwartzenegger()
let villain = new Alien()
let vShips = [] 
let kill = 0

makeEnemies(Math.floor(Math.random() * 6)+1)


    

//take hero hull, decrease by alien firepower

let start = prompt("Start Game? yes or no", "yes")

    if(start.toLowerCase() == "yes"){
        startGame(hero1, vShips);
        checkWin(hero1, vShips)
    }
    else if(start.toLowerCase() == "no"){
        alert("NEXT TIME?????")
    }    
    else{
        alert("!!ERROR!! Reload page to try again.")
    }

