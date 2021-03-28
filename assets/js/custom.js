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
 
    
    $(document).ready(function(){
      $(".dropdown-submenu a.hasSubMenu").click(function(){
        $(".dropdown-submenu").toggleClass("subMenuOn");
      });
      $('.dropdown-submenu a.hasSubMenu').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });


    // Chart Script 

    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1],
        [{v: [9, 0, 0], f: '9 am'}, 2],
        [{v: [10, 0, 0], f:'10 am'}, 3],
        [{v: [11, 0, 0], f: '11 am'}, 4],
        [{v: [12, 0, 0], f: '12 pm'}, 5],
        [{v: [13, 0, 0], f: '1 pm'}, 6],
        [{v: [14, 0, 0], f: '2 pm'}, 7],
        [{v: [15, 0, 0], f: '3 pm'}, 8],
        [{v: [16, 0, 0], f: '4 pm'}, 9],
        [{v: [17, 0, 0], f: '5 pm'}, 10],
      ]);

      var options = {
        title: 'Motivation Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }