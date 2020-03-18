
var createSpoilerBtn = function (element) {
   // create the span that englobs the spoiler content
   var span = document.createElement("span");
   span.className = "spoiler-content";
   span.innerHTML = element.innerHTML;
   
    element.innerHTML= "";
   // create the button
    var btn = document.createElement("button");
    btn.textContent= 'Display Spoiler';
    
   
    element.appendChild(btn);
    element.appendChild(span);
    btn.addEventListener('click',function(){
       //btn.parentNode.removeChild(btn);
       if (btn.textContent == 'Display Spoiler'){
           btn.textContent= 'Hide Spoiler';
           span.classList.add('visible');
       }else{
           btn.textContent= 'Display Spoiler';
           span.classList.remove('visible');
       }
       
    });
}


var elm = document.querySelectorAll('.spoiler');
for (var i = 0;i < elm.length;i++){
   createSpoilerBtn(elm[i])
}