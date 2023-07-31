// Implementing jQuery on user input

$(function(){
  $('#email').on('change', function(event1){
    // var email = 
  $('#email').val();
    // console.log(event1.target.value);
  })
    
    $('#fname').on('change', function(event1){
  // var firstName =
  $('#fname').val();
      // console.log(event1.target.value);
  })
  
  $('#lname').on('change', function(event2){
  // var lastName = 
    $('#lname').val();
 // console.log(event2.target.value);
  }) 
  

  $('#pnumber').on('change', function(event3){
  // var phoneNumber = 
  $('#pnumber').val();
    // console.log(event3.target.value);
  })
  
$('form').on('submit', function(event) {
  event.preventDefault();
  
  // Do something when the form is submitted
  console.log('Submit event: ', $('#email').val(), $('#fname').val(),
$('#lname').val(),
$('#pnumber').val());
})
  
}); 






