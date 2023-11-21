// select quantity using query selector all 
var quantity_price= document.getElementsByClassName("product_price")
var quantity = document.getElementsByClassName("Quantity")
var price = document.getElementsByClassName("Price")
var total =document.getElementById("total")
var sumtotal= 0
var deleteProduct = document.querySelectorAll(".bi-trash") 
var like = document.querySelectorAll(".bi-suit-heart-fill")


/*for(var i in quantity)
{
    console.log (i)
    
}*/
var product_price = 0;
function prix_total(){
    var total_prix =0;
    for (let i = 0; i < quantity_price.length; i++) {
        total_prix+=Number(quantity_price[i].innerHTML);

        
    }
    console.log(total_prix)
    return total_prix;

}
function updateTotal() {
    let update = prix_total()
    total.innerHTML = update
}
for(let i =0; i<quantity.length; i++ ){
    sumtotal=sumtotal+Number(price[i].innerHTML)
    total.innerHTML=sumtotal
    quantity_price[i].innerHTML=price[i].innerHTML
    quantity[i].addEventListener("change",function(){
        
            product_price = quantity[i].value*price[i].innerHTML
            quantity_price[i].innerHTML= product_price 
            sumtotal=sumtotal+product_price
            updateTotal()
    })
}
for (let i = 0; i < deleteProduct.length; i++) {
    deleteProduct[i].addEventListener("click",function(){
        deleteProduct[i].parentElement.parentElement.remove()
        updateTotal()
    })
    
}
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click",function(){
        if (like[i].style.color==="yellow") {

                    like[i].style.color="";

        }else{
            like[i].style.color="yellow";

        }

    })
    
}

