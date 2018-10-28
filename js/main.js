
// TweenMax.from(".outer", 1, { scale:0, opacity:0});
// TweenMax.from(".inner", 1, { scale:2, opacity:0});
// TweenMax.from(".circleText", 0.5, { scale:0, opacity:0, ease: Bounce});
// TweenMax.from("#barChart", 0.5, {scale:0,x:200,y:200,delay:1})
// TweenMax.staggerFrom(".bars", 1, {opacity:0,x:-200, y:200,delay:1.5}, 0.2);


//default values of bars
TweenMax.to("#twentybar, #bar", 1, {y:33.3,height:20, ease:Bounce.easeOut});
TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.5,height:20, ease:Bounce.easeOut});
TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});


//variables for circles
var blueCircle = document.querySelector("#blueCircle");
var orangeCircle = document.querySelector("#orangeCircle");
var yellowCircle = document.querySelector("#yellowCircle");
var pinkCircle = document.querySelector("#pinkCircle");
var barChart = document.querySelector("#barChart");


//hover circle to increse height of bars for blue
function blueCircleOver(){
    TweenMax.to("#bar,#twentybar", 1, {y:0, height:53.3});
}
function blueCircleOut(){
    TweenMax.to("#bar,#twentybar", 1, {y:33.3, height:20, ease:Bounce.easeOut});
}

//hover circle to increse height of bars for orange
function orangeCircleOver(){
    TweenMax.to("#bar_3_,#thirtyFive_1_", 1, {y:0, height:125.2});
}
function orangeCircleOut(){
    TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.2,height:20, ease:Bounce.easeOut});
}

//hover circle to increse height of bars for yellow
function yellowCircleOver(){
    TweenMax.to("#bar_2_,#fourtySeven_1_", 1, {y:0, height:182});
}
function yellowCircleOut(){
    TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
}


//hover circle to increse height of bars for pink
function pinkCircleOver(){
    TweenMax.to("#bar_1_,#ninetyTwo_1_", 1, {y:0, height:309});
}
function pinkCircleOut(){
    TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});
}

//bar chart over and out effect
function barChartOver(){    
    TweenMax.to("#bar,#twentybar", 1, {y:0, height:53.3});
    TweenMax.to("#bar_3_,#thirtyFive_1_", 1, {y:0, height:125.2});
    TweenMax.to("#bar_2_,#fourtySeven_1_", 1, {y:0, height:182});
    TweenMax.to("#bar_1_,#ninetyTwo_1_", 1, {y:0, height:309});
}

function barChartOut(){
    TweenMax.to("#bar,#twentybar", 1, {y:33.3, height:20, ease:Bounce.easeOut});
    TweenMax.to("#thirtyFive_1_, #bar_3_", 1, {y:105.2,height:20, ease:Bounce.easeOut});
    TweenMax.to("#fourtySeven_1_, #bar_2_", 1, {y:162,height:20, ease:Bounce.easeOut});
    TweenMax.to("#ninetyTwo_1_, #bar_1_", 1, {y:289,height:20, ease:Bounce.easeOut});
}

//listener for blue circle
blueCircle.addEventListener("mouseover", blueCircleOver);
blueCircle.addEventListener("mouseout", blueCircleOut);


//listener for orange circle
orangeCircle.addEventListener("mouseover", orangeCircleOver);
orangeCircle.addEventListener("mouseout", orangeCircleOut);


//listener for yellow circle
yellowCircle.addEventListener("mouseover", yellowCircleOver);
yellowCircle.addEventListener("mouseout", yellowCircleOut);

//listener for yellow circle
pinkCircle.addEventListener("mouseover", pinkCircleOver);
pinkCircle.addEventListener("mouseout", pinkCircleOut);


barChart.addEventListener("mouseover", barChartOver);
barChart.addEventListener("mouseout",barChartOut);