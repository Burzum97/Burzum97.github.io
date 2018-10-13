var h=document.getElementById('hour');
var m=document.getElementById('min');
var s=document.getElementById('sec');

setInterval(function(){
  var d=new Date();
  var hours=23-d.getHours();
  if (hours<10)
    hours="0"+hours;
  var minutes=59-d.getMinutes();
  if (minutes<10)
    minutes="0"+minutes;
  var seconds=59-d.getSeconds();
  if (seconds<10)
    seconds="0"+seconds;
  h.innerHTML=hours+":";
  m.innerHTML=minutes+":";
  s.innerHTML=seconds;

},1000)
