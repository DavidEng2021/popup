const popup = document.querySelector('.form');
window.onload = function(){
    setTimeout(function(){
        popup.style.display='flex';
    }, 1000);    
}

const x =document.getElementById('x');
x.addEventListener('click', ()=>{
    popup.style.display='none';
});


var w = document.getElementById('wei').value;
var h = document.getElementById('hih').value;
var a = document.getElementById('age').value;

var BMI = Math.round(w / (h / 100 * h / 100));

var sow = document.querySelector('#sow:checked');
var swe = document.querySelector('#swe:checked');
var bit = document.querySelector('#bit:checked');


var advice = document.getElementById('advice2');
if(advice.value===undefined){
    document.querySelector('.advice1').classList.add("disPlayNone");
}//如果對話框內沒有內容則不顯示
    

var button = document.getElementById('button');

var costomer = { BMI:0 , age:'', prefer:''};

button.addEventListener('click', function () {
    var costomer = { BMI:0 , age:0, prefer:''};//每次點擊前歸零
    var w = document.getElementById('wei');
    var h = document.getElementById('hih');
    var a = document.getElementById('age');
    
    var BMI = Math.round(w.value / (h.value / 100 * h.value / 100));

    var c1 = document.querySelector('#sow:checked');
    var c2 = document.querySelector('#swe:checked');
    var c3 = document.querySelector('#bit:checked');
    
    var c =[c1,c2,c3];
    costomer.BMI = BMI;
    costomer.age = a.value;
    for(i=0; i<3; i++){
        if(c[i]!=null){
        costomer.prefer+=c[i].value;
        }
    }
    console.log(costomer); //建立了一個客戶資料 可以用json形式丟到db中

    //用年齡和BMI值以及口味偏好過濾
    var cos = costomer;
    const adv=document.getElementById('advice2');

    //沒有輸入資料的情況
    if(cos.age==="" || w===null || h===null){
        adv.innerHTML=('資料不完整喔!');
    }else{

    //20歲以下情況
    if(cos.age<=20 && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!發育期間可多吃高熱量、高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age<=20 && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!發育期間仍可多吃高蛋白質、高鐵質的蔬果，如芭樂、菠菜 <a href="#"> 前往購買<a/>');
    };
    if(cos.age<=20 && cos.BMI>24){
        adv.innerHTML=('BMI過高喔!雖然是發育期間但須克制熱量攝取，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    };
    //20歲到30歲
    if(cos.age>20 && 30>=cos.age && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!年輕人打拼之餘別忘補充高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age>20 && 30>=cos.age && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!年輕人追夢最需要鈣、葉酸（維生素 B9）、鐵，可多吃甘藍菜、花椰菜、菠菜 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>20 && 30>=cos.age && cos.BMI>24){
        adv.innerHTML=('BMI過高喔!年輕人埋頭工作也要記得動一動，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    };
    //30歲到60歲
    if(cos.age>30 && 60>=cos.age && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!是該保養身體的年紀了，工作之餘別忘補充高營養的蔬果，如蘋果、釋迦 <a href="#">前往購買<a/>');
    };
    if(cos.age>30 && 60>=cos.age && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!衝刺事業不忘健康，建議抗氧化蔬果，如藍莓、草莓 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>30 && 60>=cos.age && cos.BMI>24) adv.innerHTML=('BMI過高喔!沒有青春可以揮霍，需特別注意健康，建議低熱量蔬果，如葡萄柚、香蕉 <a href="#">前往購買<a/>');
    //60歲以上
    if(cos.age>60 && cos.BMI<18.5){
        adv.innerHTML=('BMI過低，太瘦了!迎接退休需注意營養吸收，建議補充維他命D <a href="#">前往購買<a/>');
    };
    if(cos.age>60 && 24>cos.BMI && cos.BMI>=18.5){
        adv.innerHTML=('BMI標準!要有多彩退休生活，建議補充鈣質，和維他命 <a href="#"> 前往購買<a/>');
    };
    if(cos.age>60 && cos.BMI>24){
        adv.innerHTML=('BMI過高!高齡肥胖非常危險，建議控制糖分攝取，可吃木瓜、柚子、芭樂 <a href="#">前往購買<a/>');
    };
};

    document.querySelector('.advice1').classList.remove("disPlayNone");
});

