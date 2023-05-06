import React, { useState } from 'react'



const EventHandling = () => {

     const [upvotes, setUpvotes] = useState(0)
     const [mycolor, setMycolor] = useState('#eee')
     const [color, setcolor] = useState('eee')



    let likes= 0;

    const increaselikes = ()=>{
        likes++;
        console.log(likes)
    }


    const increaseUpvotes=()=>{
        // upvotes++ worng
        setUpvotes(upvotes + 1 );   // right
    }

  return (
    <div style={{backgroundColor:mycolor,height:'100vh',padding:50}}>
         <h1>EventHandling</h1>
         <hr />

         <button className='btn btn-primary' onClick={ ()=>{alert('tick tick 🐱‍💻 ')}}>click Event handling</button>    
         <br />
         <br />
         <input type="text" onChange={(e)=>{console.log(e.target.value)}} />   
         <br />
         <br />
         <input type="color"onChange={(e)=>{setMycolor(e.target.value)}} />
         <br />
         <br />
         <button className='btn btn-danger mt-4'onClick={increaselikes} >Add a like</button>
         <h1>👍{likes}</h1>
         <button className='btn btn-danger mt-4'onClick={increaseUpvotes} >Add an upvotes</button>
         <h1>🔼{upvotes}</h1>
          <input type="range" class="form-range" id="customRange1" onChange={(e)=> {console.log(e.target.value)}}/>

          <button className='btn btn-primary' onClick={()=>{alert('tick tick')}}>click</button>
          <br />
          {/* <input type="color" onChange={(e)=>{set}} /> */}

        
 </div>
  )
}

export default EventHandling