/**
 * Created by Apple on 15/8/27.
 */
$(document).ready(function(){
    $(window).on("load",function(){

        loadIndexData();

    });
});

function loadIndexData(){
    console.log("-------Hello.World!");


    $.ajax({
        type:"get",
        async: false,
        //url:"http://zsyixy.imwork.net/belan/home/piclist",
        //dataType:"jsonp",
        url: "json/index.json",
        dataType:"json",
        jsonp:"callback",
        jsonpCallback:"success_jsonpCallback",
        success:function(json){
            var dataList = json ;
            $.each(dataList.list,function(index,value){
  
            var cell = $("<div>").addClass("mui-table-view-cell mui-media mui-col-xs-6").appendTo($("#myTableView"));
           
           var imgbox = $("<div>").addClass("imgbox").appendTo(cell);
            	var mya = $("<a>").attr('href','http://baidu.com').appendTo(imgbox);
            	$("<img>").attr("src","./images/"+$(value).attr("url")).appendTo(mya);
            	
            	var imgtext = $("<div>").addClass("imgtext").appendTo(cell);
            	var userId = $("<div>").addClass("userId").appendTo(imgtext);
            	var idfl = $("<div>").addClass("id fl").appendTo(userId);
            	$("<span>"+value.nickname+"</span>").appendTo(idfl);
            	var agefl = $("<div>").addClass("age fl").appendTo(userId);
            	$("<span>"+value.age+"</span>").addClass("sex").appendTo(agefl);
            	var pointfr = $("<div>").addClass("point fr").appendTo(userId);
            	$("<i>"+Math.floor(value.score)+"</i>").appendTo(pointfr);
            	var s = value.score+"0";
            	var str = s.substring(1,s.indexOf(".") + 3);
            	$("<em>"+str+"</em>").appendTo(pointfr);
            	
            	var userInfo = $("<div>").addClass("userInfo").appendTo(cell);
            	var fire = $("<div>").addClass("fire").appendTo(userInfo);
            	$("<img>").addClass("userInfoimg").attr("src","./images/content/fire.png").appendTo(fire);
            	$("<div>"+value.flowers+"</div>").appendTo(fire);
            		
            	var heart = $("<div>").addClass("heart").appendTo(userInfo);
            	$("<img>").attr("src","./images/content/heart.png").appendTo(heart);
            	$("<div>"+value.persons+"</div>").appendTo(heart);
            	
            	var low = $("<div>").addClass("low").appendTo(userInfo);
            	$("<img>").attr("src","./images/content/low.png").appendTo(low);
            	$("<div>"+value.bb+"</div>").appendTo(low);
   
            });

        },
        error:function(){
            alert("请求出错！");
        }
    });




}