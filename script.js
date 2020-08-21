var cardCollection = ["tarot0.jpg", "tarot1.jpg", "tarot2.jpg", "tarot3.jpg", "tarot4.jpg", "tarot5.jpg", "tarot6.jpg", "tarot7.jpg", "tarot8.jpg", "tarot9.jpg", 
"tarot10.jpg", "tarot11.jpg", "tarot12.jpg", "tarot13.jpg", "tarot14.jpg", "tarot15.jpg", "tarot16.jpg", "tarot17.jpg", "tarot18.jpg", "tarot19.jpg", 
"tarot20.jpg", "tarot21.jpg", "tarot22.jpg", "tarot23.jpg", "tarot24.jpg", "tarot25.jpg", "tarot26.jpg", "tarot27.jpg", "tarot28.jpg", "tarot29.jpg", 
"tarot30.jpg", "tarot31.jpg", "tarot32.jpg", "tarot33.jpg", "tarot34.jpg", "tarot35.jpg", "tarot36.jpg", "tarot37.jpg", "tarot38.jpg", "tarot39.jpg", 
"tarot40.jpg", "tarot41.jpg", "tarot42.jpg", "tarot43.jpg", "tarot44.jpg", "tarot45.jpg", "tarot46.jpg", "tarot47.jpg", "tarot48.jpg", "tarot49.jpg", 
"tarot50.jpg", "tarot51.jpg", "tarot52.jpg", "tarot53.jpg", "tarot54.jpg", "tarot55.jpg", "tarot56.jpg", "tarot57.jpg", "tarot58.jpg", "tarot59.jpg", 
"tarot60.jpg", "tarot61.jpg", "tarot62.jpg", "tarot63.jpg", "tarot64.jpg", "tarot65.jpg", "tarot66.jpg", "tarot67.jpg", "tarot68.jpg", "tarot69.jpg", 
"tarot70.jpg", "tarot71.jpg", "tarot72.jpg", "tarot73.jpg", "tarot74.jpg", "tarot75.jpg", "tarot76.jpg", "tarot77.jpg"];

// Card 1
var oneCard = document.getElementById("card1");

oneCard.addEventListener("click", function(){
    if (oneCard.src = "images/tarotBack.jpg") {
        const rand1 = cardCollection.splice(Math.floor(Math.random() * cardCollection.length), 1);
        oneCard.src = `images/${rand1}`;
    }
})

// Card 2

var twoCard = document.getElementById("card2");

twoCard.addEventListener("click", function(){
    if (twoCard.src = "images/tarotBack.jpg") {
        const rand2 = cardCollection.splice(Math.floor(Math.random() * cardCollection.length), 1);
        twoCard.src = `images/${rand2}`;
    } 
})

// Card 3

var threeCard = document.getElementById("card3");

threeCard.addEventListener("click", function(){
    if (threeCard.src = "images/tarotBack.jpg") {
        const rand3 = cardCollection.splice(Math.floor(Math.random() * cardCollection.length), 1);
        threeCard.src = `images/${rand3}`;
    }
})

// Card 4

var fourCard = document.getElementById("card4");

fourCard.addEventListener("click", function(){
    if (fourCard.src = "images/tarotBack.jpg") {
        const rand4 = cardCollection.splice(Math.floor(Math.random() * cardCollection.length), 1);
        fourCard.src = `images/${rand4}`;
    }
})

// Card 5
var fiveCard = document.getElementById("card5");

fiveCard.addEventListener("click", function(){
    if (fiveCard.src = "images/tarotBack.jpg") {
        const rand5 = cardCollection.splice(Math.floor(Math.random() * cardCollection.length), 1);
        fiveCard.src = `images/${rand5}`;
    }
})



