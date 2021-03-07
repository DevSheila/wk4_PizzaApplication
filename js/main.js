function Display(){
    this.size = document.querySelector('#pizzaSize');
    this.crust = document.querySelector('#pizzaCrust');
    this.toppings = document.querySelector('#pizzaToppings');
    this.numPizzas = document.querySelector('#numPizzas');
    this.delivery = document.querySelector('#delivery');
    this.pizzas =document.querySelector("#pizzas-list")
}

//pizza constructor function
function Pizza(size,crust,toppings,numPizzas,delivery){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.numPizzas = numPizzas;
    this.delivery = delivery;
    
}
//Local storage constructor
function Store(){

}