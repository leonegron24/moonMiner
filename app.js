// SECTION Variables
// Let Variables
    // cheese
let cheese = 0
// let cheesePerClick = 5
//     // levels
// let knifeLevel = 1
// let shovelLevel = 1
// let elonifiedLevel = 1
// let alienLevel = 1
//     // prices
// let priceForKnifeUpgrade = 50
// let priceForGiantShovelUpgrade = 150
// let priceForElonifiedUpgrade = 500
// let priceForAlienUpgrade = 2000
    // autoCheese
// let autoCheeseAmount = 0
// let autoCheeseIncrease = 5

// Const Variables
    // cheese
const elmCheese = document.getElementById('cheeseNumber')
const elmCheesePerClick = document.getElementById('cheesePerClick')
const elmAutoCheeseAmount = document.getElementById('autoCheese')
    // levels
const elmLevelKnife = document.getElementById('levelKnife')
const elmLevelShovel = document.getElementById('levelShovel')
const elmLevelElonified = document.getElementById('levelElonified')
const elmLevelAlien = document.getElementById('levelAlien')
    // prices
const elmPriceForKnifeUpgrade = document.getElementById('knifeUpgrade')
const elmPriceForGiantShovelUpgrade = document.getElementById('shovelUpgrade')
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

// SECTION Functions

function getCheesePerClick(){
    let total = 1
    clickUpgrades.forEach(upgradeOption => {
        total += upgradeOption.quantity * upgradeOption.bonus
    })
    return total
}

function getAutoCheese(){
    let total = 0
    automaticUpgrades.forEach(autoUpgradeOption => {
        total += autoUpgradeOption.quantity * autoUpgradeOption.bonus
    })
    return total
}

// SECTION Mine
function mine(){
    cheese += getCheesePerClick()
    console.log(cheese)
    update()
}

// SECTION Update
function update(){
    //update cheesePerClicks
    if (!elmCheesePerClick){
        return
    }
    elmCheesePerClick.innerHTML = getCheesePerClick().toString()

    // update cheese
    if (!elmCheese){
        return
    }
   elmCheese.innerHTML = cheese.toString();  

    // update knifeLevel
   if (!elmLevelKnife){
    return  
    }
    elmLevelKnife.innerHTML = (clickUpgrades[0].quantity).toString()

    //  update shovelLevel
    if (!elmLevelShovel){
        return  
        }
    elmLevelShovel.innerHTML = clickUpgrades[1].quantity.toString()

    if (!elmLevelAlien){
        return
    }
    elmLevelAlien.innerHTML = automaticUpgrades[1].quantity.toString()

    if (!elmLevelElonified){
        return
    }
    elmLevelElonified.innerHTML = automaticUpgrades[0].quantity.toString()

    }

// SECTION Click Upgrades

function clickUpgrade(upgradeName){
    let selectedUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    if (!selectedUpgrade){
        return
    }
    if (cheese < selectedUpgrade?.price){
        window.alert('Not enough cheese!')
        return
    }
    cheese -= selectedUpgrade?.price
    selectedUpgrade.price *= 1.2
    selectedUpgrade.quantity += 1
    update()


}

// SECTION AutoCheese
function autoCheese(){
    if (!elmAutoCheeseAmount){
        return
    }
    let total = getAutoCheese()
    elmAutoCheeseAmount.innerHTML = '+' + total
    cheese += total
    if (!elmCheese){
        return
    }
   elmCheese.innerHTML = cheese.toString();  

}

// SECTION Auto Upgrades
function autoUpgrades(upgradeChoice){
    if (upgradeChoice === 'Elonified'){
        console.log('clicked Elon')
        if (cheese >= priceForElonifiedUpgrade){
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
        if (cheese >= priceForAlienUpgrade){
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

