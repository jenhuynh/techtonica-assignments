class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(type, price) {
        let ticket = {
            type: type, 
            price: price
        };
        this.availableTickets.push(ticket);
    }
    allTickets() {
        let result = "";
        for (let i =0; i < this.availableTickets.length; i++) {
            result += `${i + 1}. ${this.availableTickets[i]["type"]} ($${this.availableTickets[i]["price"]}) `
        }
        return `All tickets: ${result}`;
    }
    searchTickets(min, max) {
        let result = "Eligible tickets: ";
        for (let i =0; i < this.availableTickets.length; i++) {
                if(this.availableTickets[i]["price"] >= min && this.availableTickets[i]["price"] <= max){
                   result += `${i + 1}. ${this.availableTickets[i]["type"]} ($${this.availableTickets[i]["price"]}) `
                } 
        }
        if (result === "Eligible tickets: "){
            return "No tickets available."
        }
        return result;
    }
  }

  

//class for tickettype
class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const eventObj1 = new Event(
'KLOS Golden Gala',
'An evening with hollywood vampires'
);
 
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);



// pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj2, eventObj3);
// in order to check whether the elements are pushed, use console.log
// console.log(eventArray);

for (let event of eventArray) {
    let li = document.createElement("li");
    li.innerHTML =  `${event.name} - ${event.description}. - ${event.allTickets(0, 250)}` ;
    document.getElementById("event").appendChild(li);
}

for (let event of eventArray) {
    let li2 = document.createElement("li");
    li2.innerHTML = `${event.name} - ${event.description} - ${event.searchTickets(0, 250)}`;
    document.getElementById("eligibleTickets").appendChild(li2);
}



console.log(eventObj2.availableTickets);
console.log(eventObj2.allTickets());
console.log(eventObj3.availableTickets);
console.log(eventObj3.allTickets());
console.log(eventObj3.searchTickets(0, 250));