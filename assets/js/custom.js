$(document).ready(function() {
  
	var nice = $("html").niceScroll();  // The document page (body)
	
	// $("#div1").html($("#div1").html()+' '+nice.version);
    
    $("#scrolldesign").niceScroll({cursorborder:"",cursorcolor:"#0081B7",boxzoom:true}); // First scrollable DIV

    // $("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // Second scrollable DIV
    // $("#boxframe").niceScroll("#boxscroll3",{cursorcolor:"#0F0",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // This is an IFrame (iPad compatible)
	
    // $("#boxscroll4").niceScroll("#boxscroll4 .wrapper",{boxzoom:true});  // hw acceleration enabled when using wrapper
    
  });


  $(document).ready(function(){
    $("html").niceScroll();
    $("body").niceScroll();
    $('.nicescroll-rails').remove();
});

    
    
    
    
    let toggle1 = document.querySelector("#toggle1");
    let toggle2 = document.querySelector("#toggle2");
    let nested1 = document.querySelector("#nested1");
    let nested2 = document.querySelector("#nested2");
    let nested3 = document.querySelector("#nested3");
    let nested4 = document.querySelector("#nested4");
    let nested5 = document.querySelector("#nested5");
    let nested6 = document.querySelector("#nested6");
    let allnested1 = document.querySelector("#allnested1");
    let allnested3 = document.querySelector("#allnested3");


    let arrow1 = document.querySelector("#arrow1");
    let arrow2 = document.querySelector("#arrow2");
    let menutext1 = document.querySelector("#menutext1");
    let menutext2 = document.querySelector("#menutext2");
    let menutext3 = document.querySelector("#menutext3");


    toggle1.addEventListener('click',()=>{
    
      if(allnested1.style.display == "block")
      {
        allnested1.style.display="none";
        arrow1.style.transform = "rotate(0deg)";
        arrow1.style.color = "#fff";
        arrow1.style.textShadow = "none";
        menutext1.style.color = "#fff";
        toggle1.style.background = "none";

      } else{
        allnested1.style.display = "block";
        nested1.style.display = "block";
        nested2.style.display = "block";
        nested3.style.display = "block";
        nested4.style.display = "block";

        arrow1.style.transform = "rotate(90deg)";
        arrow1.style.color = "#00FFFF";

        menutext1.style.color = "#00FFFF";
        toggle1.style.background = "#0072A1";
        toggle1.style.color = "#0072A1";
        toggle1.style.transform = "all 1s ease";
        
        arrow1.style.textShadow = "0 0 5px #12fff1";
        arrow1.style.transition = "all 1s ease";

      }

    });

    
    nested4.addEventListener('click',()=>{
      if(allnested3.style.display == "block")
      {
        allnested3.style.display="none";
        nested5.style.display="none";
        nested6.style.display = "none";
        arrow2.style.transform = "rotate(0deg)";
        arrow2.style.color = "#fff";
        arrow2.style.textShadow = "none";
        menutext2.style.color = "#fff";
        menutext3.style.color = "#00DCFF";
        nested4.style.background = "none";
        nested6.style.background = "none";

      } else{
        allnested3.style.display="block";
        nested5.style.display = "block";
        nested6.style.display = "block";
        arrow2.style.transform = "rotate(90deg)";
        arrow2.style.color = "#00FFFF";
        menutext2.style.color = "#00FFFF";
        menutext3.style.color = "#00FFFF";
        nested4.style.background = "#0072A1";
        nested6.style.background = "#0072A1";
        arrow2.style.textShadow = "0 0 5px #12fff1";
        arrow2.style.transition = "all 1s ease";
      }
    })
 
    
    // $(document).ready(function(){
    //   $(".dropdown-submenu a.hasSubMenu").click(function(){
    //     $(".dropdown-submenu").toggleClass("subMenuOn");
    //   });
    //   $('.dropdown-submenu a.hasSubMenu').on("click", function(e){
    //     $(this).next('ul').toggle();
    //     e.stopPropagation();
    //     e.preventDefault();
    //   });
    // });


    // Chart Script Start Here


    // google.charts.load('current', {
    //   callback: function () {
    //     drawChart();
    //     $(window).resize(drawChart);
    //   },
    //   packages:['corechart']
    // });
    
    // function drawChart() {
    //   var data = google.visualization.arrayToDataTable([
    //     ['x', 'y'],
    //     [0, 0],
    //     [1, 1],
    //     [2, 3],
    //     [3, 7],
    //     [4, 15],
    //     [5, 31]
    //   ]);


    //   options = {
    //     title: 'Activities'
    //     ,chartArea:{left:0,top:0,width:"100%",height:"100%"}
    //     ,height: 500
    //     ,width:500

    //   };
    
    //   var container = document.getElementById('chart_div');
    //   var chart = new google.visualization.LineChart(container);
    //   chart.draw(data, options);
    // }

    google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart1();
  drawChart2();
});

// Reminder: you need to put https://www.google.com/jsapi in the head of your document or as an external resource on codepen //

