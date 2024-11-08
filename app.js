// Global Variables 
let cheese = 0
let cheesePerClick = 5
let knifeLevel = 1
let shovelLevel = 1
let priceForKnifeUpgrade = 50
let priceForGiantShovelUpgrade = 150
const elmCheese = document.getElementById('cheese')
const elmLevelKnife = document.getElementById('levelKnife')
const elmLevelShovel = document.getElementById('levelShovel')
const elmCheesePerClick = document.getElementById('cheesePerClick')
const elmPriceForKnifeUpgrade = document.getElementById('knifeUpgrade')
const elmPriceForGiantShovelUpgrade = document.getElementById('shovelUpgrade')

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

}

function clickUpgrade(weapon){
    if (weapon === 'knife'){
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
}
