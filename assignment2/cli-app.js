const prompt = require('prompt-sync')();

let totalBill = 0;
let isShoppingComplete = false;

const itemsList = `Hey there, We have the following items in our shop.
1) Soap - 10 rupees/item
2) Tooth Paste 20 rupees/item
3) Ice cream 30 rupees/item`;

const question1 = `What do you want to purchase today ? `;
const question2 = `How many ? `;
const question3 = `Anything else ? `;

while (!isShoppingComplete) {
    var itemPrice, itemQuantity, itemTotal, itemBuyValid, quantityValid, moreItemsValid;

    do {
        console.log(itemsList)
        const itemToBuy = prompt(question1);
    
        switch(itemToBuy){
            case "1":
                itemPrice = 10;
                itemBuyValid = true;
                break;
            case "2":
                itemPrice = 20;
                itemBuyValid = true;
                break;
            case "3":
                itemPrice = 30;
                itemBuyValid = true;
                break;
            default:
                console.log('---------   wrong input   ---------');
                itemBuyValid = false;
        }
    }
    while(!itemBuyValid);

    do{
        itemQuantity = prompt(question2);
        itemQuantity = Number(itemQuantity);

        if(isNaN(itemQuantity) || Math.sign(itemQuantity) == "-1"){
            console.log("---------   Enter a valid quantity   ---------");
            quantityValid = false;
        }
        else{
            quantityValid = true;
        }
    }
    while(!quantityValid);
    
    itemTotal = itemPrice * itemQuantity;

    totalBill += itemTotal;

    do {
        const moreItems = prompt(question3);

        if (moreItems == "yes" || moreItems == "Yes") {
            isShoppingComplete = false;
            moreItemsValid = true;
        }
        else if(moreItems == "no" || moreItems == "No"){
            console.log('calculating your bill...');
            console.log(`Your bill is ${totalBill} rupees`);
            isShoppingComplete = true;
            moreItemsValid = true;
        }
        else{
            console.log("---------   Enter Yes or No   ---------");
            moreItemsValid = false;
        }
    }
    while(!moreItemsValid);

}










