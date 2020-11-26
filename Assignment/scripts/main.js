let manu_cost = 0;  //Manufacturer Cost
var a = false;      //This Boolean Value is False by default it becomes true if user clicks Add to order button after creating a order
var b = false;      //This Boolean Value is False by default it becomes true if user clicks Order Favourite button after creating a favourite Order
let extras_cost = 0; //This Variable counts extra item costs
let favourite_order_cost = 0; //This Variable keeps the favourite order's Cost
let pack_cost = 5000;  //This variable keeps Packing Cost because Tins is selected by default it has a value of 5000
let size_cost = 2500;  //This variable keeps Size cost because Medium is selected by default it has a value of 2500
let order_counter = 0; //This variable counts the number of orders in overall order
let loyalty_points = 0; //This variable helps to count Loyalty points
let overallcost = 0;  //This variable counts the cost of overall cost
let Current_cost = manu_cost + pack_cost + size_cost + extras_cost; //equation for current cost
let products = ["Dilmah","jones","George Steuart","Malwatte Valley Plantations", "Prestige Ceylon Teas", "Empire teas"]; //Manufacturer names in an array
let size = ["Small", "Medium", "Large"]; //Sizes in an array
let packing = ["Tins", "Bags", "Paper Pouches"]; //packings in an array

var object1 = {product_manu: "",
               product_size: "Medium",
               product_pack: "Tins",
               extra_things1:"",
               extra_things2:"",
               extra_things3:"",} //this object helps with printing current order in interface for user

var object2 = {product_manu: "",
               product_size: "Medium",
               product_pack: "Tins",
               extra_things:["","",""]} //this object helps with creating  Favourite order



var overall_tableR = document.getElementById("overalltableR"); //getting overall order table's table body for javascript


var form = document.getElementById("Teaform"); //getting the form element from html for javascript



var manufacturer_select_button1 = document.getElementById("Manufacturer1"); //dilmah radio button
var manufacturer_select_button2 = document.getElementById("Manufacturer2"); //jones radio button
var manufacturer_select_button3 = document.getElementById("Manufacturer3"); //george steuart radio button
var manufacturer_select_button4 = document.getElementById("Manufacturer4"); //Malwatte valley plantation radio button
var manufacturer_select_button5 = document.getElementById("Manufacturer5"); //prestige ceylon tea radio button
var manufacturer_select_button6 = document.getElementById("Manufacturer6"); //Empire teas radio button

var packing_select_button1 = document.getElementById("packing1"); //Tins radio button
var packing_select_button2 = document.getElementById("packing2"); //Bags radio button
var packing_select_button3 = document.getElementById("packing3"); //paper pouches radio button

var size_select_button1 = document.getElementById("size1"); //small radio button
var size_select_button2 = document.getElementById("size2"); //medium radio button
var size_select_button3 = document.getElementById("size3"); //large radio button


var extras_checkbox1 = document.getElementById("extras1"); //Mug checkbox
var extras_checkbox2 = document.getElementById("extras2"); //Silverpin checkbox
var extras_checkbox3 = document.getElementById("extras3"); //Wooden Souvenier checkbox


var extra1 = document.getElementById("e1"); //first Span tag in current order table in html 
var extra2 = document.getElementById("e2"); //Second Span tag in current order table in html 
var extra3 = document.getElementById("e3"); //Third Span tag in current order table in html 




var Order_favourite_button = document.getElementById("ofavourite"); //Order Favourite Button html
var Customize_Order_button = document.getElementById("CustomO");  //Customize order Button in html
var Add_to_order_button = document.getElementById("AddObutton"); //Add to order button in html
var add_to_favourite_button = document.getElementById("favouritebutton"); //Add to favourites button in html
var check_loyalty_button = document.getElementById("loyalb"); //check loyalty button in html
var place_order_button = document.getElementById("placeorder"); //Place Order Button

var Currentseller = document.getElementById("currentproduct"); //table data - Manufacturer(current order)
var Currentsize = document.getElementById("currentsize");    //table data - size(current order)
var Currentpack = document.getElementById("currentpack");    //table data - packing(current order)
var Currentextras =  document.getElementById("currentextras");  //table data - extras(current order)
   

var current_pay = document.getElementById("currentpay"); //span tag which shows the current order cost
var overall_pay = document.getElementById("fullpay"); //span tag which shows the overall order cost

manufacturer_select_button1.addEventListener("click", printcurrent);   //Manufacturer radio buttons with event listeners/
manufacturer_select_button2.addEventListener("click", printcurrent);
manufacturer_select_button3.addEventListener("click", printcurrent);
manufacturer_select_button4.addEventListener("click", printcurrent);
manufacturer_select_button5.addEventListener("click", printcurrent);
manufacturer_select_button6.addEventListener("click", printcurrent);

packing_select_button1.addEventListener("click", packingselection); //packing radio buttons with event listeners
packing_select_button2.addEventListener("click", packingselection);
packing_select_button3.addEventListener("click", packingselection);

size_select_button1.addEventListener("click", sizeselection); //size radio buttons with event listeners
size_select_button2.addEventListener("click", sizeselection);
size_select_button3.addEventListener("click", sizeselection);

extras_checkbox1.addEventListener("click", extrastuff); //extra items check boxes with event listeners
extras_checkbox2.addEventListener("click", extrastuff);
extras_checkbox3.addEventListener("click", extrastuff);

var requi = document.getElementsByName("seller"); //all the input tags used manufacturer selecting

Add_to_order_button.addEventListener("click", orderfunction);            //All the buttons in the interface with event listeners
place_order_button.addEventListener("click", placeorderfunction);
add_to_favourite_button.addEventListener("click", Addfavouriteorder);
Order_favourite_button.addEventListener("click", orderFavourite);
Customize_Order_button.addEventListener("click",C_order_function);
check_loyalty_button.addEventListener("click", check_loyalty_function )

if(localStorage.getItem("loyaltypoint") == null){localStorage.setItem("loyaltypoint", "0") ;} //if a entry for loyalty points doesn't exist in local storage this if conditon will create it with a value of 0




function printcurrent() {                                             /*function that will work after user clicks a manufactuer selecting radio button*/
    if(this == manufacturer_select_button1){Currentseller.innerHTML= products[0]; //prints the manufactuer in current order table
                                            Current_cost -= manu_cost; //reduces old manufacturer cost if it exists
                                            manu_cost = 1000;      //setting the new manufacturer cost
                                            Current_cost += manu_cost; //Adding the new manufacturer cost to current order cost
                                            current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost; //printing the current cost in interface
                                            Currentseller.style.display = "table-cell";   //viewing the current order to user
                                            Currentsize.style.display = "table-cell";
                                            Currentpack.style.display = "table-cell"; 
                                            Currentextras.style.display = "block";
                                            object1.product_manu = "Dilmah"; //Setting the value to a property in object
                                            object2.product_manu = "Dilmah"; //Setting the value to a property in object
                                             }
                                                  /*everything below acts the same*/
    else if(this == manufacturer_select_button2){Currentseller.innerHTML= products[1];
                                                 Current_cost -= manu_cost;
                                                 manu_cost = 1500;
                                                 Current_cost += manu_cost;
                                                 current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                 Currentseller.style.display = "table-cell";
                                                 Currentsize.style.display = "table-cell";
                                                 Currentpack.style.display = "table-cell";
                                                 Currentextras.style.display = "block";
                                                 object1.product_manu = "jones";
                                                 object2.product_manu = "jones";
                                                 }

    else if(this == manufacturer_select_button3){Currentseller.innerHTML= products[2];
                                                 Current_cost -= manu_cost;
                                                 manu_cost = 1000;
                                                 Current_cost += manu_cost;
                                                 current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                 Currentseller.style.display = "table-cell";
                                                 Currentsize.style.display = "table-cell";
                                                 Currentpack.style.display = "table-cell";
                                                 Currentextras.style.display = "block";
                                                 object1.product_manu = "George Steuart";
                                                 object2.product_manu = "George Steuart";
                                                 }

    else if(this == manufacturer_select_button4){Currentseller.innerHTML= products[3];
                                                 Current_cost -= manu_cost;
                                                 manu_cost = 2000;
                                                 Current_cost += manu_cost;
                                                 current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                 Currentseller.style.display = "table-cell";
                                                 Currentsize.style.display = "table-cell";
                                                 Currentpack.style.display = "table-cell";
                                                 Currentextras.style.display = "block";
                                                 object1.product_manu = "Malwatte valley plantations";
                                                 object2.product_manu = "Malwatte valley plantations";
                                                 }

    else if(this == manufacturer_select_button5){Currentseller.innerHTML= products[4];
                                                 Current_cost -= manu_cost;
                                                 manu_cost = 1000;
                                                 Current_cost += manu_cost;
                                                 current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                 Currentseller.style.display = "table-cell";
                                                 Currentsize.style.display = "table-cell";
                                                 Currentpack.style.display = "table-cell";
                                                 Currentextras.style.display = "block";
                                                 object1.product_manu = "Prestige Ceylon Teas";
                                                 object2.product_manu = "Prestige Ceylon Teas";
                                                }
    else if(this == manufacturer_select_button6){Currentseller.innerHTML= products[5];
                                                 Current_cost -= manu_cost;
                                                 manu_cost = 2000;
                                                 Current_cost += manu_cost;
                                                 current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                 Currentseller.style.display = "table-cell";
                                                 Currentsize.style.display = "table-cell";
                                                 Currentpack.style.display = "table-cell"; 
                                                 Currentextras.style.display = "block";
                                                 object1.product_manu = "Empire Teas";
                                                 object2.product_manu = "Empire Teas";
                                                }
}

function packingselection(){ //function that will work if user clicks packing selection radio buttons
    if(this == packing_select_button1){Currentpack.innerHTML = packing[0]; //showing user in the interface their packing selection
                                       Current_cost -= pack_cost; //reducing existing packing cost from current cost
                                       pack_cost = 5000; //new packing cost
                                       Current_cost += pack_cost; //Adding the new packing cost to current cost
                                       current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost; //Printing Current the current cost in interface
                                       object1.product_pack = "Tins"; //Setting the value to a property in object
                                       object2.product_pack = "Tins"; //Setting the value to a property in object
                                      
               }    //everything below works the same
    else if (this == packing_select_button2){Currentpack.innerHTML = packing[1];
                                             Current_cost -= pack_cost;
                                             pack_cost = 2500;
                                             Current_cost += pack_cost; 
                                             current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                             object1.product_pack = "Bags";
                                             object2.product_pack = "Bags";
                                            
              }
    else if (this == packing_select_button3){Currentpack.innerHTML = packing[2];                
                                             Current_cost -= pack_cost;
                                             pack_cost = 1000;
                                             Current_cost += pack_cost;
                                             current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                             object1.product_pack = "Paper Pouches";
                                             object2.product_pack = "Paper Pouches";
                                          
        
    }
}


function sizeselection(){   //function that will work if user clicks size selection radio buttons
    if(this == size_select_button1){Currentsize.innerHTML = size[0]; //showing user their size selection
                                    Current_cost -= size_cost; //reducing existing size cost
                                    size_cost =1000; //new size cost
                                    Current_cost += size_cost; //adding new size cost to current cost
                                    current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost; //printing the new current cost to in the interface 
                                    object1.product_size = "Small"; //Setting the value to a property in object
                                    object2.product_size = "Small"; //Setting the value to a property in object
                                   } //everything works the same
    else if (this == size_select_button2){Currentsize.innerHTML = size[1];
                                          Current_cost -= size_cost;
                                          size_cost = 2500;
                                          Current_cost += size_cost;
                                          current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                         object1.product_size = "Medium";
                                         object2.product_size = "Medium";
                                         console.log(object1.product_size);
                        
                             }
    else if (this == size_select_button3){Currentsize.innerHTML = size[2];
                                          Current_cost -= size_cost;
                                          size_cost = 5000;
                                          Current_cost += size_cost;
                                          current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                         object1.product_size = "Large";
                                         object2.product_size = "Large";
                                         console.log(object1.product_size);
  
                            }
}

function extrastuff(){ //function that will work if user ticks or unticks a checkbox
    if(this == extras_checkbox1 && extras_checkbox1.checked== true){Current_cost -= extras_cost; //reducing extra items cost from current cost
                                                                    extras_cost+=500; //adding 500 to extras cost
                                                                    Current_cost += extras_cost; //adding the new extras cost to current cost
                                                                    extra1.innerHTML="Mug"; //printing in the interface
                                                                    current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost; //printing current cost
                                                                    object1.extra_things1 = "Mugs"; //Setting the value to a property in object
                                                                    object2.extra_things[0] = "Mugs"; //Setting the value to a property in object
                                                                    
                            
                                                                   }
    else if (this == extras_checkbox1 && extras_checkbox1.checked == false){Current_cost -= extras_cost; //reducing extra items cost from current cost
                                                                            extras_cost -= 500;//subtracting 500 from extras cost
                                                                            Current_cost += extras_cost; //adding the new extras cost to current cost
                                                                            current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost; //printing current cost
                                                                            extra1.innerHTML="";  //printing in the interface
                                                                            object1.extra_things1 = ""; //Setting the value to a property in object
                                                                            object2.extra_things[0] = ""; //Setting the value to a property in object
                                                                            
                                                          }  //everything below works the same
    else if (this == extras_checkbox2 && extras_checkbox2.checked== true){Current_cost -= extras_cost;
                                                                          extras_cost += 1000;
                                                                          Current_cost += extras_cost;
                                                                          extra2.innerHTML="Silver pin";
                                                                          current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                                          object1.extra_things2 = "Silver pin";
                                                                          object2.extra_things[1] = "Silver pin";
                                                                          
                                                            }
    else if (this == extras_checkbox2 && extras_checkbox2.checked == false){Current_cost -= extras_cost;
                                                                            extras_cost -= 1000;
                                                                            Current_cost += extras_cost;
                                                                            current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                                            extra2.innerHTML="";
                                                                            object1.extra_things2 = "";
                                                                            object2.extra_things[1] = "";
                                                                          
                                                          }
    else if (this == extras_checkbox3 && extras_checkbox3.checked== true){Current_cost -= extras_cost;
                                                                          extras_cost += 1500;
                                                                          Current_cost += extras_cost;
                                                                          extra3.innerHTML="Woodern Souvenier";
                                                                          current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                                          object1.extra_things3 = "Wooden Souvenier";
                                                                          object2.extra_things[2] = "Wooden Souvenier";
                                                            
                                                      }
    else if (this == extras_checkbox3 && extras_checkbox3.checked == false){Current_cost -= extras_cost;
                                                                            extras_cost -= 1500;
                                                                            Current_cost += extras_cost;
                                                                            current_pay.innerHTML= "Current Cost(LKR) : "+Current_cost;
                                                                            extra3.innerHTML=""
                                                                            object1.extra_things3 = "";
                                                                            object2.extra_things[2] = "";
                                                                            console.log(object1.extra_things[2]);
                                                    }



}


function placeorderfunction(){  //this function will work if the user clicks place order button
   if(a === true ){                             //this if conditon will run only if user has clicked the add order button atleastt once
          overall_tableR.innerHTML = "";         //clearing the overall table body
          Currentseller.style.display = "none";    //clearing current order table
          Currentsize.style.display = "none";
          Currentpack.style.display = "none";
          Currentextras.style.display = "none";
          overallcost = 0;                            //setting overall cost to 0
          overall_pay.innerHTML = "Overall Cost(LKR) : 0";   //printing in the interface
          current_pay.innerHTML = "Current Cost(LKR) : 0";   //printing in the interface
          var j = parseInt(localStorage.getItem("loyaltypoint")); //getting loyalty points from the local storage
          j+=loyalty_points;                                      //adding newly aquired loyalty points if it exists
          localStorage.setItem("loyaltypoint", j);                //setting new loyalty points in the local storage
          loyalty_points = 0;                                     //setting loyalty point counter to 0
          order_counter = 0;                                      //setting order counter to 0
          alert("Thanks for making a custom reservation");        //alerting the user about making the reservation
          form.style.display = "block";                           //making the form visible
          add_to_favourite_button.style.display = "inherit";     //making add to order button visible
          a = false;                                             //changing the boolean value to false
          }
   else {alert("Create An Order first");//this else condition will run if the user hasn't clicked the add to button 
         form.style.display = "block"; //displays the form
         add_to_favourite_button.style.display = "inherit"; //displays the add to favourite button
         }


}



function Addfavouriteorder(){  //this function will work if the user clicks add to favourite button
  
for (var i=0; i<requi.length; i++) { //the for statement will only run if atleast one manufacturer radio button is clicked
 
             if (requi[i].type == 'radio' && requi[i].checked) {  //the code inside this if statement will only run if atleast one manufacturer radio button is clicked
                      localStorage.setItem("FavouriteManufacturer", object2.product_manu); //setting favourite order details in local storage
                      localStorage.setItem("FavouritePack", object2.product_pack);
                      localStorage.setItem("FavouriteSize", object2.product_size);
                      localStorage.setItem("FavouriteExtras1", object2.extra_things[0]);
                      localStorage.setItem("FavouriteExtras2", object2.extra_things[1]);
                      localStorage.setItem("FavouriteExtras3", object2.extra_things[2]);
                      localStorage.setItem("FavouriteCost", Current_cost);
                      return alert("order set as Favourite");
                 }
            }
return alert("Select a Manufacturer");  //this will run if user clicks add to favourite button without selecting a manufacturer
}


 function orderFavourite(){ //this function will work if the user  clicks order favourite button
    if(localStorage.getItem("FavouriteManufacturer") === null){alert("Favourite Order Not Found");}//this if condition will run if user hasn't created a favourite order
    

    
    else {  //this else condition will run if user has already created a favourite order
      Currentseller.innerHTML = localStorage.getItem("FavouriteManufacturer"); //getting favourite order info from local storage and printing them
      Currentpack.innerHTML = localStorage.getItem("FavouritePack"); 
      Currentsize.innerHTML = localStorage.getItem("FavouriteSize");
      extra1.innerHTML = localStorage.getItem("FavouriteExtras1");
      extra2.innerHTML = localStorage.getItem("FavouriteExtras2");
      extra3.innerHTML = localStorage.getItem("FavouriteExtras3");
      Currentseller.style.display = "table-cell"; //setting display for table cells 
      Currentsize.style.display = "table-cell";
      Currentpack.style.display = "table-cell"; 
      Currentextras.style.display = "block";
      var g = parseInt(localStorage.getItem("FavouriteCost")); //gettinng favourite order cost from local storage
      Current_cost = g;  //setting the favourite order cost to current order cost
      current_pay.innerHTML = "Current Cost(LKR) : " + Current_cost; //printing current order cost
      b = true; //turning this boolean to true
      form.style.display = "none"; //making form the disappear so the user can't customize and the order and messup cost counting function
      add_to_favourite_button.style.display = "none"; //making the add to order button disappear so user won't click it
      alert("Favourite Order Added to Current Order");//alerting the user
      }






 }

 function orderfunction(){ //this function will work if the user clicks add to order button
  add_to_favourite_button.style.display = "inherit"; //makes the add to favourites button reappear
  if(b === true){for (var i=0; i<requi.length; i++) {//this will run if the user clicks this button after clicking order favourite button
                    if (requi[i].type == 'radio' && requi[i].checked) { //uncheks the checked manufacturer radio button
                          requi[i].checked = false;}}
                          var createrow = overall_tableR.insertRow(-1); //creates a row in overall table
                          var cell1 = createrow.insertCell(0); //adding table cells
                          var cell2 = createrow.insertCell(1);
                          var cell3 = createrow.insertCell(2); 
                          var cell4 = createrow.insertCell(3);
                          var cell5 = createrow.insertCell(4);
                          cell1.innerHTML = localStorage.getItem("FavouriteManufacturer"); //printing details inside table cells
                          cell2.innerHTML = localStorage.getItem("FavouriteSize");
                          cell3.innerHTML = localStorage.getItem("FavouritePack");
                          cell4.innerHTML =  localStorage.getItem("FavouriteExtras1")+"<br>"+localStorage.getItem("FavouriteExtras2")+"<br>"+localStorage.getItem("FavouriteExtras3");
                          cell5.innerHTML = localStorage.getItem("FavouriteCost");
                          Currentseller.style.display = "none"; //making current order table items disappear
                          Currentsize.style.display = "none";
                          Currentpack.style.display = "none";
                          Currentextras.style.display = "none";
                          let v = parseInt(localStorage.getItem("FavouriteCost")); //getting favourite cost
                          overallcost += v; //adding favourite cost to overall cost
                          overall_pay.innerHTML = "Overall Cost(LKR) :"+ overallcost; //printing overall cost
                          current_pay.innerHTML = "Current Cost(LKR) : 0"; //making current order cost to 0
                          b = false;  //making this false incase if the user wants to add his/her favourite order to overall order again
                          a = true; //making this true so user can place their order if they want
                          order_counter++; //incrementing order count
                          if(order_counter > 4){loyalty_points = order_counter * 20;  //counting the loyalty point
                                                 }
                         form.style.display = "block"; //making the form appear
                         return alert("Favourite Order Added to Overall Order");}//alerting the user
  if(b === false){//this will run if the user clicks add order button after creating a order
                         for (var i=0; i<requi.length; i++) {

                              if (requi[i].type == 'radio' && requi[i].checked) {//everything here works the same as above if condition
                                         requi[i].checked = false;
                                         console.log(Current_cost);
                                         var createrow = overall_tableR.insertRow(-1);
                                         var cell1 = createrow.insertCell(0);
                                         var cell2 = createrow.insertCell(1);
                                         var cell3 = createrow.insertCell(2); 
                                         var cell4 = createrow.insertCell(3);
                                         var cell5 = createrow.insertCell(4);
                                         cell1.innerHTML = object1.product_manu;
                                         cell2.innerHTML = object1.product_size;
                                         cell3.innerHTML = object1.product_pack;
                                         cell4.innerHTML = object1.extra_things1 + "<br>" +object1.extra_things2 + "<br>" + object1.extra_things3;
                                         cell5.innerHTML = Current_cost;
                                         Currentseller.style.display = "none";
                                         Currentsize.style.display = "none";
                                         Currentpack.style.display = "none";
                                         Currentextras.style.display = "none";
                                         overallcost += Current_cost;
                                         overall_pay.innerHTML = "Overall Cost :"+ overallcost;
                                         current_pay.innerHTML = "Current Cost : 0";
                                         a = true;
                                         order_counter++;
                                         console.log(order_counter);
                                         if(order_counter > 4){ loyalty_points = order_counter * 20;
                                                      console.log(loyalty_points);}

                                                      form.style.display = "block";                                                      
                                                


      return alert("Order Added to Overall Order.");//alerting the user
    } 
  }  return  alert("Please Select a Manufacturer");}//alerting user to select a manufacturer
 

}
 function C_order_function(){//this function will work if user clicks make a new order button
              for (var i=0; i<requi.length; i++) {

                 if (requi[i].type == 'radio' && requi[i].checked) { //unchecking the checked manufacturer radio button if it exists
                      requi[i].checked = false;}}
                Currentseller.style.display = "none"; //making current order disappear
                Currentsize.style.display = "none";
                Currentpack.style.display = "none";
                Currentextras.style.display = "none";
                current_pay.innerHTML = "Current Cost(LKR) : 0";//making current order cost to 0
                form.style.display = "block";//making form visible
                b = false;//making this to false so user can add their custom order to current order
                add_to_favourite_button.style.display = "inherit";//making add to favourite button appear
                alert("Your Current Order Has Been Cleared");//alerting the user

}

function check_loyalty_function(){ //this function will work if user clicks check loyalty button
       alert("Your loyalty point is : "+localStorage.getItem("loyaltypoint"));//alerting user about their loyalty points
}
