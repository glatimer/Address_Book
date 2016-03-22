//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.address.push(Address);



// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    // grab form input for contact information
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    // store inputted contact information as a whole
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    // take the whole of the information and append it to a list on webpage
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();

    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)



  });
});
