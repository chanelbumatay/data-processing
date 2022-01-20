//use location object to access querystring (address bar)
const queryString = window.location.search;

if(queryString !== ""){ //process data
      let myData = ''; //with store data for output
      let myCart =''; //will store cart details
      let myTotal = 0; //with store total cost


      //output to console    
      //console.log(queryString);
          
      //separate querystring parameters
      const urlParams = new URLSearchParams(queryString);
      

      urlParams.forEach(function(value, key) {

          if(key=="Cart"){//Process cart
              switch(value){
                  case "Widget":
                      myCart += "Widget: $3.99<br />";
                      myTotal += 3.99;
                  break;

                  case "Sprocket" :
                      myCart += "Sprocket: $5.99<br />";
                      myTotal += 5.99;
                  break;

                  case "Thingy" :
                      myCart += "Thingy: $1.99<br />";
                      myTotal += 1.99;
              
              }

          }else{//build Shipping info
                //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
                //will replace underscore with spaces
            key = key.split("_").join(" ");
            myData += `<p>${key}: ${value}</p>`;
           
          }
  
  });
        myCart = `
          <p><b>Cart Contents</b></p>
          <p>${myCart}</p>
          <p>Total: $${myTotal}</p>
      `;

        myData = myCart + "<p><b>Shipping Information </b></p>" + myData;
        myData += '<p><a href="index.html">CLEAR</a></p>';
        document.getElementById("output").innerHTML = myData;
}

