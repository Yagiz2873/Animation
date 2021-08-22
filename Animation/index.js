
        document.title = "Animation";
        window.onload = function () {
            var posX = 0, posY=0,a = 0;
            var smallbox = document.getElementById("smallbox");
            var bigbox = document.getElementById("bigbox");
            var time = setInterval(move, 10);
            bigbox.onmouseout= function(){
                bigbox.style.backgroundColor = "blue";
                smallbox.style.backgroundColor = "blueviolet";
                var interval_id = window.setInterval(()=>{}, 99999);
                for (var i = 0; i < interval_id; i++)
	            window.clearInterval(i);
            };
            bigbox.onclick = function(){
                setInterval(move,10);
            }
            bigbox.onmouseover = function(){
                bigbox.style.backgroundColor = "blueviolet";
                smallbox.style.backgroundColor = "blue";
                setInterval(move,10);
            }
            function move() {
                if(posX<=150 && posY<=150 && a<=150){
                    a = a+1;
                    posX = posX + 1;
                    smallbox.style.left = posX + "px";
                }
                if (posX >=150 && posY<=150) {
                    posY++;
                    smallbox.style.top = posY + "px";
                
                } 
                if(posY>=151 && posX<=151){
                        posX--;
                        smallbox.style.left = posX + "px";
                }
                if(posX == 0 && posY<=151 && a != 0){
                    posY--;
                    smallbox.style.top = posY + "px";
                }
                if(posX == 0 && posY == 0 && a == 151){
                    a=0; 
                }
            }
        }
        var p = document.getElementById("p1");
        p.onmouseover = function(){
            p.innerHTML = "HTML5 CSS3 AND JAVASCRIPT";
        };
        p.onmouseout = function(){
            p.innerHTML = "MOVE OUT THE MOUSE FROM THE BIG BOX TO STOP ANIMATION!!!";
        };
        p.onmousedown = function(){
            p.innerHTML = "CLICK THE BIG BOX TO SPEED UP THE ANIMATION!!!";
        };
        p.onmouseup = function(){
            p.innerHTML = "CLICK THE BIG BOX TO SPEED UP THE ANIMATION!!!";
        };