document.querySelector("#show-login").addEventListener("click", function() {
  console.log("Show login button clicked");
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
  console.log("Close button clicked");
  document.querySelector(".popup").classList.remove("active");
});

          // Calculator code

  function sip()    //1
  {
    var e=parseInt(document.getElementById('sip1').value);
    var f=parseInt(document.getElementById('sip2').value);
    var g=parseInt(document.getElementById('sip3').value);
    var h=parseInt(document.getElementById('sip4').value);
    var n1=100*e;
    var n2=h*e;
    var n3=g/n1;
    var n4=1+n3;
    var n5=(f*(Math.pow(n4,n2)-1)/n3).toFixed(2);

    document.getElementById('sipr').innerHTML=n5;
  }

  function cc()   //2
  {
    var d1=parseInt(document.getElementById('cc1').value);
    var d2=parseInt(document.getElementById('cc2').value);
    var d3=parseInt(document.getElementById('cc3').value);
    var d4=d2/d1;
    var d5=1/d3;
    var d6=(((Math.pow(d4,d5))-1)*100).toFixed(2);

    document.getElementById('cargc').innerHTML=d6;
  }

  function gpl()    //3
  {
    var i=parseInt(document.getElementById('gpl1').value);
    var j=parseInt(document.getElementById('gpl2').value);
    var k=parseInt(document.getElementById('gpl3').value);
    var l=parseInt(document.getElementById('gpl4').value);
    var aaa=(i*(1+(l/100))/(1+(j/100))).toFixed(2);
    document.getElementById('goalpl').innerHTML=aaa;
  }

  function myfun()    //4
  {
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    var c=parseInt(document.getElementById('number3').value);
    var d=(a*Math.pow((1+(b/100)),c)).toFixed(2);


    document.getElementById('result').innerHTML=d;
  }
