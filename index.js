// /console.log("hello kitty")
// let button=document.querySelectorAll("#number-ofrooms a")
//console.log(button)
    // for(element of button){
       // element.addEventlistener("click",e=>{
          //  console.log(e.target)
    //    })
        

   //  }
   
   function bookAlert(){
       alert("Booked successfully")
   }

    function searchhouse(searchTerm) {
       getSearchMethod(searchTerm);

      fetch("http://localhost:3000/posts")
          .then((result) => {
              return result.json();
          }).then((res) => {
              init(res);
      });
   }