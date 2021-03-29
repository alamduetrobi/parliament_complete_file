$(document).ready(function() {
  
	var nice = $("html").niceScroll();  // The document page (body)
	
	// $("#div1").html($("#div1").html()+' '+nice.version);
    
    $("#scrolldesign").niceScroll({cursorborder:"",cursorcolor:"#0081B7",boxzoom:true}); // First scrollable DIV

    // $("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // Second scrollable DIV
    // $("#boxframe").niceScroll("#boxscroll3",{cursorcolor:"#0F0",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // This is an IFrame (iPad compatible)
	
    // $("#boxscroll4").niceScroll("#boxscroll4 .wrapper",{boxzoom:true});  // hw acceleration enabled when using wrapper
    
  });

    
    
    
    
    // let toggle1 = document.querySelector(".toggle1");
    // let toggle2 = document.querySelector(".toggle2");
    // let nested1 = document.querySelector(".nested1");
    // let nested2 = document.querySelector(".nested2");
    // let nested3 = document.querySelector(".nested3");
    // let nested4 = document.querySelector(".nested4");
    // let nested5 = document.querySelector(".nested5");
    // let nested6 = document.querySelector(".nested6");
    // let allnested1 = document.querySelector(".allnested1");
    // let allnested3 = document.querySelector(".allnested3");
    

    // let arrow1 = document.querySelector(".arrow1");
    // let arrow2 = document.querySelector(".arrow2");
    // let menutext1 = document.querySelector(".menutext1");
    // let menutext2 = document.querySelector(".menutext2");
    // let menutext3 = document.querySelector(".menutext3");


    // toggle1.addEventListener('click',()=>{
    
    //   if(allnested1.style.display == "block")
    //   {
    //     allnested1.style.display="none";
    //     arrow1.style.transform = "rotate(0deg)";
    //     arrow1.style.color = "#fff";
    //     arrow1.style.textShadow = "none";
    //     menutext1.style.color = "#fff";
    //     toggle1.style.background = "none";

    //   } else{
    //     allnested1.style.display = "block";
    //     nested1.style.display = "block";
    //     nested2.style.display = "block";
    //     nested3.style.display = "block";
    //     nested4.style.display = "block";

    //     arrow1.style.transform = "rotate(90deg)";
    //     arrow1.style.color = "#00FFFF";

    //     menutext1.style.color = "#00FFFF";
    //     toggle1.style.background = "#0072A1";
    //     toggle1.style.color = "#0072A1";
    //     toggle1.style.transform = "all 1s ease";
        
    //     arrow1.style.textShadow = "0 0 5px #12fff1";
    //     arrow1.style.transition = "all 1s ease";

    //   }

    // });

    
    // nested4.addEventListener('click',()=>{
    //   if(allnested3.style.display == "block")
    //   {
    //     allnested3.style.display="none";
    //     nested5.style.display="none";
    //     nested6.style.display = "none";
    //     arrow2.style.transform = "rotate(0deg)";
    //     arrow2.style.color = "#fff";
    //     arrow2.style.textShadow = "none";
    //     menutext2.style.color = "#fff";
    //     menutext3.style.color = "#00DCFF";
    //     nested4.style.background = "none";
    //     nested6.style.background = "none";

    //   } else{
    //     allnested3.style.display="block";
    //     nested5.style.display = "block";
    //     nested6.style.display = "block";
    //     arrow2.style.transform = "rotate(90deg)";
    //     arrow2.style.color = "#00FFFF";
    //     menutext2.style.color = "#00FFFF";
    //     menutext3.style.color = "#00FFFF";
    //     nested4.style.background = "#0072A1";
    //     nested6.style.background = "#0072A1";
    //     arrow2.style.textShadow = "0 0 5px #12fff1";
    //     arrow2.style.transition = "all 1s ease";
    //   }
    // })
 
    
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
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
    
          var data = new google.visualization.DataTable();
          data.addColumn('number', 'X');
          data.addColumn('number', 'Dogs');
    
          data.addRows([
            [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
            [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
          ]);
    
          var options = {
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Popularity'
            }
          };
    
          var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    
          chart.draw(data, options);
        }