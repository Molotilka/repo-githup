let gem = document.querySelector('.gem-cost')
let parsedGem = parseFloat(gem.innerHTML)
let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let gpc = 1;

function incrementGem() {
    parsedGem += gpc;
    gem.innerHTML = parsedGem
}

function buyClicker() {
    if (parsedGem >= parsedClickerCost)
    {
        parsedGem -= parsedClickerCost
        gem.innerHTML = parsedGem

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parsedClickerIncrease * 2;
        clickerIncrease.innerHTML = parsedClickerIncrease;
        gpc += parsedClickerIncrease
        
        parsedClickerCost *= 3;
        clickerCost.innerHTML = parsedClickerCost;
    }
}