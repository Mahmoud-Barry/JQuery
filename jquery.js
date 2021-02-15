
 var $para = $('p');
$para.on("click",function(event){
   
    var date = new Date(event.timeStamp);
    $para.text("Vous avez cliqué : " + date);
})