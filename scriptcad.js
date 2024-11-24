function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
      document.getElementById("quant").value = 1;
    }else{
    document.getElementById("quant").value = value;
    }
  }



  function isso(blabla){
    var value = parseInt(document.getElementById("blabla").value);
    value+=blabla;
    if(value < 1){
      document.getElementById("blabla").value = 1;
    }else{
    document.getElementById("blabla").value = value;
    }
  }