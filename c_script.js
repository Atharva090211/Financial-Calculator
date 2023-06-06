
  function myfun()    //1
  {
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    var c=parseInt(document.getElementById('number3').value);
    var d=(a*Math.pow((1+(b/100)),c)).toFixed(2);


    document.getElementById('result').innerHTML=d;
  }

  function sip()    //2
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

  function gpl()    //3
  {
    var i=parseInt(document.getElementById('gpl1').value);
    var j=parseInt(document.getElementById('gpl2').value);
    var k=parseInt(document.getElementById('gpl3').value);
    var l=parseInt(document.getElementById('gpl4').value);
    var aaa=(i*(1+(l/100))/(1+(j/100))).toFixed(2);
    document.getElementById('goalpl').innerHTML=aaa;
  }

  function gpsip()    //4
  {
    var m=parseInt(document.getElementById('gpsip1').value);
    var n=parseInt(document.getElementById('gpsip2').value);
    var o=parseInt(document.getElementById('gpsip3').value);
    var p=parseInt(document.getElementById('gpsip4').value);
    var q=parseInt(document.getElementById('gpsip5').value);

    document.getElementById('sip').innerHTML=m;
  }

  function oneti()    //5
  {
    var r=parseInt(document.getElementById('oneti1').value);
    var s=parseInt(document.getElementById('oneti2').value);
    var t=parseInt(document.getElementById('oneti3').value);
    var t1=r/s;
    var t2=(r/100)+1;
    var t3=Math.log(t1);
    var t4=t3/t2;
    document.getElementById('timedc').innerHTML=t4;
  }

  function timed()    //6
  {
    var u=parseInt(document.getElementById('timed1').value);
    var v=parseInt(document.getElementById('timed2').value);
    var w=parseInt(document.getElementById('timed3').value);
    var x=parseInt(document.getElementById('timed4').value);

    document.getElementById('timedcri').innerHTML=u;
  }

  function rp()   //7
  {
    var a1=parseInt(document.getElementById('rp1').value);
    var a2=parseInt(document.getElementById('rp2').value);
    var a3=parseInt(document.getElementById('rp3').value);
    var a4=parseInt(document.getElementById('rp4').value);
    var a5=parseInt(document.getElementById('rp5').value);

    document.getElementById('retirementp').innerHTML=a1;
  }

  function ip()   //8
  {
    var b1=parseInt(document.getElementById('ip1').value);
    var b2=parseInt(document.getElementById('ip2').value);
    var b3=parseInt(document.getElementById('ip3').value);

    document.getElementById('investmentp').innerHTML=b1;
  }

  function sm()   //9
  {
    var c1=parseInt(document.getElementById('sm1').value);
    var c2=parseInt(document.getElementById('sm2').value);
    var c3=parseInt(document.getElementById('sm3').value);
    var ccc=(c1*Math.pow((1+(c3/100)),c2)).toFixed(2);

    document.getElementById('smfd').innerHTML=ccc;
  }

  function cc()   //10
  {
    var d1=parseInt(document.getElementById('cc1').value);
    var d2=parseInt(document.getElementById('cc2').value);
    var d3=parseInt(document.getElementById('cc3').value);
    var d4=d2/d1;
    var d5=1/d3;
    var d6=(((Math.pow(d4,d5))-1)*100).toFixed(2);

    document.getElementById('cargc').innerHTML=d6;
  }


