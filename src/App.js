
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Records from './records.json'
import React from 'react';
function App() {
  var [i, setCounter] = React.useState(0)
  return (
    <>
 <p class="lead text-center">"" </p>

       
 <div class="container2" >  
 <h2 class="h2-lead text-center" >
                <span style={{color:"#29b475"}}>Thousands </span> 
                <span style={{color:"rgb(150, 145, 145)"}}>of lives changed</span>
            </h2>
            <h3 class="h2-lead text-center" style={{color:"rgb(150, 145, 145)"}}>Hear it from the once who have been on this journey already</h3>
           
        <div class="row">
            <div class="col "style={{backgroundColor:"#16255d"}} >
            <img  onClick={_ => setCounter(i = 0)} class="first1"  alt='' src="https://images.geekster.in/new-testimonial/Saurabh-Garg.webp"/>
                <img onClick={_ => setCounter(i = 1)} class="second1" alt='' src="https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp"  />
                <img onClick={_ => setCounter(i = 2)}   class="third1"alt='' src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp" />
                <img onClick={_ => setCounter(i = 3)} class="fourth1" alt='' src="https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp"  />
                <img onClick={_ => setCounter(i = 4)}  class="fifth1"   alt=''src="https://images.geekster.in/new-testimonial/Karri-Devi.webp" />
              </div>
      
           
         
                <div class="col">
                <div class="row">
                      <div class="col" style={{backgroundColor: "#fff"}}>
                          <img  alt='' src= { Records && Records[i].image}  class="garg"/><br/>
                          <h3 style={{textAlign:"center ;"}}>{ Records && Records[i].name}</h3><br/>
                          <img  alt='' src= { Records && Records[i].company} class="avizva"/>
                      </div>
                      <div class="col" style={{backgroundColor: "#fff"}}>
                         
                      <p style={{marginTop:"30px"}}> { Records && Records[i].description}                                                     
                     </p>
                      <p style={{color:"#737c81"}}>Read more...</p>
                      
              <button onClick={_ => setCounter(i + 1)}> Move Forward👍</button>
         
                      </div>
                      <button  style={{textAlign:"center ;"}}class="btn btn-success lead text-center">button 3d</button>
                      <button onClick={_ => setCounter(i - 1)}> Move backward👍</button>
                    </div>
                    </div> 
                   
                    
                    <div class="col"style={{backgroundColor:"#16255d"}} >
                    <img onClick={_ => setCounter(i = 5)} class="sixth1" alt=''src="https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp" />
         <img onClick={_ => setCounter(i = 6)} class="fifth" alt=''src="https://images.geekster.in/new-testimonial/Nipun-Sinha.webp"  />   
      <img onClick={_ => setCounter(i = 7)}  class="seventh" alt=''src="https://images.geekster.in/new-testimonial/Utkarsh-singh.webp"  />
      <img onClick={_ => setCounter(i = 8)} class="eighth" alt=''src="https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp"  />
       <img onClick={_ => setCounter(i = 9)} class="tenth" alt=''src="https://images.geekster.in/new-testimonial/Pawan-Kumar.webp"  />
             </div>
                    </div>
      </div>
    
    </>
  );
}

export default App;
