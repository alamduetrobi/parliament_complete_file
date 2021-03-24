
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
      // if(nested1.style.display == "block" || nested2.style.display == "block" || nested3.style.display == "block" || nested4.style.display == "block")
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
        // arrow1.style.margin = "5px 0px 0px 0px";
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

        // menutext3.style.color = "#00FFFF";
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
