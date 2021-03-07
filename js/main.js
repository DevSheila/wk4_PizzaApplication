const display = new Display();

const store = new Store();

//add a pizza order on submit
document.getElementById('pizzaForm').addEventListener('submit', function(event){

    //prevent submission without inputs
    event.preventDefault();

    const size = document.querySelector('#pizzaSize');
    const crust = document.querySelector('#pizzaCrust');
    const toppings = document.querySelector('#pizzaToppings');
    const numPizzas = document.querySelector('#numPizzas');
    const delivery = document.querySelector('#delivery');

    //create an object for the constructor function
    const pizza = new Pizza(this.size.value, this.crust.value, this.toppings.value,this.numPizzas.value, this.delivery.value );

    //validate input fields
    display.validateField(pizza,store);


})

//checking validation for fields
Display.prototype.validateField = function(pizza,store){
    //check if inputs are empty

    if(this.delivery.value == 'yes delivery'){
        var location = prompt("Enter location of delivery");
        alert("Your order will be deliered at "+ location);

    }

    if(this.size.value === '' ||this.crust.value === ''|| this.toppings.value  === ''|| this.numPizzas.value  === ''|| this.delivery.value === ''){
        alert("fill all fields");

    }else{
        // alert(" all fields have been filled");
        this.addPizza(pizza);
        store.addPizzas(pizza);
        this.clearFields();
    }
}


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