
document.getElementById("vals").onfocus=function(){
    this.value = '';
};
document.getElementById("vals").onblur=function(){
    if(this.value == ''){
        this.value = 3
    }
};
document.getElementById("start").onclick=function(){
    var viewContent=document.getElementById("vals").value;
        if (viewContent<1||viewContent>5){
            alert('请输入1-5，你输入的是：'+viewContent);
        }else{
            document.getElementById("vals").setAttribute("disabled","disabled");
            document.getElementById('start').setAttribute("disabled","disabled");
            document.getElementById('restart').style.display='block';
            var allElem=document.getElementById('dynamics');
            var elem=document.getElementById('list');
            var arr=["A:","B:","C:","D:","E:"];
            var arr2=[];
            var signal=0;

            elem.innerHTML="";
            var a="";


            for(var i=0;i<viewContent;i++){
                b=parseInt(10*Math.random()+1);
                c=parseInt(10*Math.random()+1);
                d=parseFloat((b+c)/c).toFixed(2);
                e=b+c;
                arr2[i]={};
                arr2[i].b=b;
                arr2[i].c=c;
                arr2[i].number=arr[i];
                arr2[i].da= d ;
                arr2[i].time=e;
                arr2[i].totaiTime=b+c;
                arr2[i].toString=function(){
                    return this.da;
                };
                a=a+"<li><h3>"+arr[i]+"</h3><span>"+b+"s</span><span>"+c+"s</span><span>" +d+"</span></li>";
            }

            var setTime=arr2.sort()[arr2.length-1]["time"].toString();
            var  number=arr2.sort()[arr2.length-1]["number"];
            document.getElementById("danCi").textContent=number.charAt(0);
            elem.innerHTML= "<li>" +"<span>等待时间&nbsp;</span><span> 服务时间</span><span> 优先权</span>"+"</li>"+a;
            var setTime2=undefined;
            var setTime1=undefined;
            function newTime(){
                if(setTime.length==2){
                    setTime1=parseInt(setTime.charAt(0));
                    setTime2=parseInt(setTime.charAt(1));
                    document.getElementById("right1").textContent=setTime1;
                    document.getElementById("right2").textContent=setTime2;

                }else{
                    var setTime2=parseInt(setTime.charAt(0));

                    setTime1=0;
                    document.getElementById("right1").textContent=setTime1;
                    document.getElementById("right2").textContent=setTime2;

                }


                var interval=setInterval(refreshTime,1000);
                var i=10;
                function refreshTime(){

                    if(setTime1==0){
                        setTime2=setTime2-1;
                        document.getElementById("right2").textContent=setTime2;

                        if(setTime2==0){
                            clearInterval(interval);
                            arr2.length--;

                            for(var i=0;i<arr2.length;i++){
                                arr[i]={};
                                b=arr2[i].b+parseInt(setTime);
                                h=arr2[i].b;
                                c=arr2[i].c;

                                if(c==10)
                                    c=9;
                                d=parseFloat((b+c)/c).toFixed(2);
                                arr2[i].da=d;
                                arr2[i].time=c;
                                arr2[i].toString=function(){
                                    return this.da;
                                };


                            }

                            setTime=arr2.sort()[arr2.length-1]["time"].toString();
                            number =arr2.sort()[arr2.length-1]["number"];

                            document.getElementById("danCi").textContent=number.charAt(0);
                            newTime();

                        }
                    }
                    if(setTime1==1){
                        setTime2=setTime2-1;
                        document.getElementById("right2").textContent=setTime2;
                        if(setTime2==-1){
                            setTime2=9;
                            document.getElementById("right2").textContent=setTime2;
                            setTime1=0;
                            document.getElementById("right1").textContent=setTime1;
                            //setTime2=i;
                        }

                    }

                }

            }
            newTime();

        }
};

document.getElementById("restart").onclick=function () {
    window.location.reload();
};




