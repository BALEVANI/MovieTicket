// Constructor For The Tickets
function Tickets(){
    this.customers = {

    };
    this.movies = {
        "invincible" : 3000,
        "despicable me4" : 3000,
        "garfield" : 3000,
        "kxgnewempire" : 3000,
        "if" : 3000
    };
    this.id = 0;
}


// Method For Assigning Id
Tickets.prototype.assignId = function(){
    this.id += 1;
    return this.id ;
}

// Method For Adding Customer
Tickets.prototype.addCustomer = function(customer){
    customer.id = this.assignId();
    this.customers[customer.id] = customer;
};

// Method For Getting Pricing
Tickets.prototype.getPrice = function(customer){
    let price = this.movies[customer.movie];
    if(price === undefined){
        price = 0;
    }
    if(customer.age > 65){
        price -= 500;
    }
    if(this.id > 3){
        price -= 200 
    }
    if(customer.time ==="12:30 pm" || customer.time === "3:30 pm"){
        price -= 200
    }
    
    return price;
};

// Method For Finding Customer
Tickets.prototype.findCustomer = function(id){
    if(this.customers[id] !== undefined ){
        return this.customers[id];
    }
    return false
}

// Method For Deleting Customerw
Tickets.prototype.deleteCustomer = function(id){
    if(this.customers[id] === undefined){
        return false;
    }
    delete this.customers[id];
    return true;
}

// Constructor For The Customer
function Customer(name , age , time , movie , price){
    this.name = name;
    this.age = age;
    this.time = time;
    this.movie = movie;
    this.price = price;
};
