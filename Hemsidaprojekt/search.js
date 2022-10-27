document.querySelector("form").addEventListener("submit", (event) => {
    openPage(event);
});

function openPage(e)
                  {

                    console.log("Form submitted...");

                    console.log(e);
                    e.preventDefault();

                    let x = document.getElementById("search").value;
                    
                    // ACTION
                    
                    if(x === "God Of War" || x === "god of war" || x === "gow" || x === "GOW"){
                      window.location.replace("./download1.html");
                    }


                    if(x === "Hades" || x === "hades"){
          
                      window.location.replace("./download1.html");
          
                    }


                    if(x === "Elden Ring" || x === "elden ring"){
          
                      window.location.replace("./download1.html");
          
                    }


                    // FREE TO PLAY

                    if(x === "Apex Legends" || x === "apex legends"){
          
          window.location.replace("./download2.html");
          
                    }

                    if(x === "Valorant" || x === "valorant"){
          
          window.location.replace("./download2.html");
          
                    }

                    if(x === "Warframe" || x === "warframe"){
          
          window.location.replace("./download2.html");
          
                    }

                    // FANTASY

                    if(x === "Skyrim" || x === "skyrim" || x === "elder scrolls" || x === "Elder Scrolls"){
          
          window.location.replace("./download3.html");
          
                    }

                    if(x === "Witcher 3" || x === "witcher 3" || x === "witcher" || x === "Witcher"){
          
          window.location.replace("./download3.html");
          
                    }

                    if(x === "WoW" || x === "wow" || x === "world of warcraft" || x === "World Of Warcraft"){
          
          window.location.replace("./download3.html");
          
                    }
                    
                    // FPS

                    if(x === "Rainbow Six Siege" || x === "rainbow six siege" || x === "rainbow six" || x === "r6" || x === "Rainbow Six" || x === "R6" ){
          
          window.location.replace("./download4.html");
          
                    }

                    if(x === "DOOM Eternal" || x === "doom eternal" || x === "DOOM" || x === "doom"){
          
          window.location.replace("./download4.html");
          
                    }

                    if(x === "Battlefield 1" || x === "battlefield 1" || x === "Battlefield" || x === "battlefield"){
          
          window.location.replace("./download4.html");
          
                    }

                    if(x === "Home" || x === "home"){
          
          window.location.replace("./index.html");
          
                    }

                  }