total_div = "<div class='calender-show-div-week' style='float:left'>一</div><div class='calender-show-div-week' style='float:left'>二</div><div class='calender-show-div-week' style='float:left'>三</div>" +
    "<div class='calender-show-div-week' style='float:left'>四</div><div class='calender-show-div-week' style='float:left'>五</div><div class='calender-show-div-week' style='float:left'>六</div>" +
    "<div class='calender-show-div-week' style='float:left'>日</div><br><br><br>";
//每月1号是星期几
for(var i=1;i<=31;i++){
    div_day = "<div class='calender-show-div-day' style='float:left'>" + i + "</div>";
    total_div += div_day;
    document.getElementById("calender-show").innerHTML = total_div;
    if(i%7==0){
        total_div += "<br><br><br>";
    }
}
