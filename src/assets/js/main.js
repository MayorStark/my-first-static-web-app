$(function(){
    var isSpinning = true;
    
    $('#button').click(function(){
      if(isSpinning == true){
        $(".svg_layer").attr("class", "svg_layer"); 
        isSpinning = false;
        $(this).addClass('active');
      }else{
       $(".svg_layer").attr("class", "active svg_layer");      
        isSpinning = true;
        $(this).removeClass('active');
      }
    });
  }); 