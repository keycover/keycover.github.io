
$(function(){


/** FullPage.js Init **/

$('#fullpage').fullpage({
  resize: true,
       verticalCentered: true,
       css3:true,
       scrollOverflow: true,
       anchors:["firstPage","secondPage","thirdPage","fourthPage"]


    });
$.fn.fullpage.reBuild();


/** FullPage.js Finish **/




/** Contact Me Validation & Sening Email **/

$("#submit").click(function(event) {
  var validate=0;
  if($("input[name='name']").val()=="")
  $("input[name='name']").parent().parent().addClass('has-error');
  else{
    $("input[name='name']").parent().parent().removeClass('has-error');
    validate++;
  }
  if($("input[name='email']").val()=="")
  $("input[name='email']").parent().parent().addClass('has-error');
  else{
    $("input[name='email']").parent().parent().removeClass('has-error');
    validate++;
  }
  if($("#message").val()==""){
  $("#message").parent().parent().addClass('has-error');
  }
  else{
    $("#message").parent().parent().removeClass('has-error');
    validate++;
  }

  if(validate==3){
    $(this).addClass('hidden').next().removeClass('hidden');



    $.ajax({
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json",
  data: {
    'key': 'YpzlWwJTtCf6wvYSvQekLA',
    'message': {
      'from_email': 'keycoverstaff@gmail.com',
      'to': [
          {
            'email': 'keycoverstaff@gmail.com',
            'name': 'Staff',
            'type': 'to'
          },
          {
            'email': 'riccardo.amadio1@gmail.com',
            'name': 'Destinatario',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': "Nome: "+$("#name").text()+" email:"+$("#email").text(),
      'html': $("#message").text()
    }
  }
}).done(function(response) {
  console.log(response);
   var arr=[response[0],response[1]];
   var sum=0;
   $.each( arr, function( index, value ){
     if(value['status']=='sent')
     sum++;
});
console.log(sum);
if(sum<2){
  console.log("ERROR HTTP");

}
$("#submit").removeClass('hidden').next().addClass('hidden');
swal("OK!", "The email was sent !", "success");

 });

  }

});;


/** Finish Contact Me & Sending Email **/



});
