$(document).ready( function(){
var tirSize=90;
var pricePaper=0;
var priceForm=0;
var pricePrint=0;
var sum=0;



var typePaper={
  "Мелованная бумага (белая)":6.8,
  "Бумага повышенной белизны":40.5,
  "Prestige Лен (белый)":45};

  var typeColor={
    "Односторонняя черно-белая":{"forma":100, "print":14},
    "Двухсторонняя черно-белая":{"forma":220, "print":28},
    "Односторонняя цветная":{"forma":110, "print":37},
    "Двухсторонняя цветная+черно-белая":{"forma":220, "print":51},
    "Двухсторонняя цветная":{"forma":220, "print":74}
  };

  console.log (typeColor["Односторонняя черно-белая"]["forma"]);

insertPaper();
insertColor();
/*******************************************************/
 function insertPaper(){
   var html="";
   for(type in typePaper){
     html+="<option value='"+type+"'>"+type+"</option>";
   }
   $('#paper').append(html);


 }
/*******************************************************/
  function insertColor(){
    var html="";
    for(type in typeColor){
      html+="<option value='"+type+"'>"+type+"</option>";
    }
    $('#color').append(html);


  }
/*******************************************************/
function suma(){
  tirSize=$("#size").val()/30;
  var  Paper=$("#paper").val();
  if( Paper!="-")
    pricePaper=typePaper[Paper]*tirSize;
  var Col=$("#color").val();
  if( Col!="-"){
      priceForm=typeColor[Col]["forma"];
      pricePrint=typeColor[Col]["print"]*tirSize;
  }
  sum=pricePaper+priceForm+pricePrint;
  $('.price span').text(sum);
}
/*****************************************************/
$('#size').click(function(){

  suma();
});
/**************************************************/
$('#paper').change(function(){
  suma();
});
/***************************************/
$('#color').change(function(){
  var Col=$("#color").val();
  suma();
  $(".card-images img").hide("slow");
  switch (Col) {
    case "Односторонняя черно-белая":$("#card_1_0").show();

      break;
    case "Двухсторонняя черно-белая":$("#card_1_1").show();

      break;
    case "Односторонняя цветная":$("#card_4_0").show();

      break;
    case "Двухсторонняя цветная+черно-белая":$("#card_4_1").show();

      break;
    case "Двухсторонняя цветная":$("#card_4_4").show();

      break;
    default:

  }
})
});
