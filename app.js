// Let Variables
    // cheese
let cheese = 0
let cheesePerClick = 5
    // levels
let knifeLevel = 1
let shovelLevel = 1
let elonifiedLevel = 1
let alienLevel = 1
    // prices
let priceForKnifeUpgrade = 50
let priceForGiantShovelUpgrade = 150
let priceForElonifiedUpgrade = 500
let priceForAlienUpgrade = 2000
    // autoCheese
let autoCheeseAmount = 0
let autoCheeseIncrease = 5

// Const Variables
const elmCheese = document.getElementById('cheeseNumber')
const elmLevelKnife = document.getElementById('levelKnife')
const elmLevelShovel = document.getElementById('levelShovel')
const elmLevelElonified = document.getElementById('levelElonified')
const elmLevelAlien = document.getElementById('levelAlien')
const elmCheesePerClick = document.getElementById('cheesePerClick')
const elmPriceForKnifeUpgrade = document.getElementById('knifeUpgrade')
const elmPriceForGiantShovelUpgrade = document.getElementById('shovelUpgrade')
const elmAutoCheeseAmount = document.getElementById('autoCheese')
const elmpriceForElonifiedUpgrade = document.getElementById('elonified')
const elmpriceForAlienUpgrades = document.getElementById('alien')

// Global Lists
let clickUpgrades = [
    {
      name: 'knife',
      price: 50,
      quantity: 0,
      bonus: 5
    },
    {
    name: 'shovel',
    price: 150,
    quantity: 0,
    bonus: 10
    }
  ];
  
  let automaticUpgrades = [
    {
      name: 'elonified',
      price: 200,
      quantity: 0,
      bonus: 50
    },
    {
        name: 'alien',
        price: 400,
        quantity: 0,
        bonus: 100
      }
  ];

//   Functions
function mine(){
    cheese+=cheesePerClick
    console.log(cheese)
    update()
}

function update(){
    //update cheesePerClicks
    if (!elmCheesePerClick){
        return
    }
    elmCheesePerClick.innerHTML = cheesePerClick

    // update cheese
    if (!elmCheese){
        return
    }
   elmCheese.innerHTML = cheese;  

    // update knifeLevel
   if (!elmLevelKnife){
    return  
    }
    elmLevelKnife.innerHTML = knifeLevel

    //  update shovelLevel
    if (!elmLevelShovel){
        return  
        }
    elmLevelShovel.innerHTML = shovelLevel

    if (!elmLevelAlien){
        return
    }
    elmLevelAlien.innerHTML = alienLevel

    if (!elmLevelElonified){
        return
    }
    elmLevelElonified.innerHTML = elonifiedLevel

    }

function clickUpgrade(weapon){
    if (weapon === 'knife'){
        console.log('clicked shovel')
        if (cheese >= 50){
        cheesePerClick += 20
        cheese -= priceForKnifeUpgrade
        priceForKnifeUpgrade += 200
        if (!elmPriceForKnifeUpgrade){
            return
        }
        elmPriceForKnifeUpgrade.innerHTML = priceForKnifeUpgrade
        knifeLevel += 1
        update()
        }else{
            window.alert('Not enough cheese!')
        }
    }   

    if (weapon === 'shovel'){
        console.log('clicked shovel')
        if (cheese >= 150){
            cheesePerClick += 40
            cheese -= priceForGiantShovelUpgrade
            priceForGiantShovelUpgrade += 400
            if (!elmPriceForGiantShovelUpgrade){
                return
            }
            elmPriceForGiantShovelUpgrade.innerHTML = priceForGiantShovelUpgrade
            shovelLevel += 1
            update()
            }else{
                window.alert('Not enough cheese!')
            }
        }
        console.log("Cheese Per Click! = " + " " + cheesePerClick)
    }
function autoCheese(){
    if (!elmAutoCheeseAmount){
        return
    }
    elmAutoCheeseAmount.innerHTML = '+' + autoCheeseIncrease
    cheese += autoCheeseIncrease
    if (!elmCheese){
        return
    }
   elmCheese.innerHTML = cheese;  

}

function autoUpgrades(upgradeChoice){
    if (upgradeChoice === 'Elonified'){
        console.log('clicked Elon')
        if (cheese >= 500){
            autoCheeseIncrease += 10
            cheese -= priceForElonifiedUpgrade
            priceForElonifiedUpgrade *= 2
            if (!elmpriceForElonifiedUpgrade){
                return
            }
            elmpriceForElonifiedUpgrade.innerHTML = priceForElonifiedUpgrade
            elonifiedLevel += 1
            update()
            }else{
                window.alert('Not enough cheese!')
            }
        }
    if (upgradeChoice === 'Alien' ){
        console.log('clicked Alien')
        if (cheese >= 2000){
            autoCheeseIncrease += 20
            cheese -= priceForAlienUpgrade
            priceForAlienUpgrade *= 2
            if (!elmpriceForAlienUpgrades){
                return
            }
            elmpriceForAlienUpgrades.innerHTML = priceForAlienUpgrade
            alienLevel += 1
            update()
            }else{
                window.alert('Not enough cheese!')
            }
        }
    console.log("Auto Cheese Amount! +" + " " + autoCheeseIncrease)
}

setInterval(autoCheese,3000)

