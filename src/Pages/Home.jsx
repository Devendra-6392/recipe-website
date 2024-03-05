import React, { useEffect ,useRef} from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
  let Navigate = useNavigate();
  let InputRef = useRef();
   const [input, setinput] = useState('')
  let [abc,setabc] = useState([]);

  let fetchData = async()=>{
    let res = await fetch(`https://api.edamam.com/search?q=${input}&app_id=d618fb2b&app_key=9f15b3b255d3942e3ecae5f352e50de8`)
    let data = await res.json()
    
    console.log(data);
    setabc(data.hits)
    // console.log(data.hits[5].recipe.label);
  }
  useEffect(()=>{
    fetchData();
  },[input]);
 
   console.log(abc);

   let handleSubmit = (e)=>{
    e.preventDefault();
    let Input = InputRef.current.value;
    setinput(Input)
    
   }

  //  let ViewRecipe = (e)=>{
  //   e.preventDefault();
  //   // console.log(e.recipe.label);
   
  //   Navigate('/Viewrecipe')
    
  //  }

   
   

        


  
  

  return (
    <div className='row mb-3 m-auto' > 
    <div className= 'col-md-4 m-auto mt-3' >
      <form className="d-flex">
        <input ref={InputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSubmit} className="btn btn-success" type="submit">Search</button>
      </form>
         </div>
    {!input && <h1 className='text-center'> please search for any recipe</h1>}
    <div className="row w-75 m-auto">
      
    {abc.map((el)=>{
        return <div    className="card m-3" style={{width: '18rem'}}>
        <img style={{height:"250px"}} src={el.recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{height:"50px"}}  className="card-title"> calories:{el.recipe.calories}</h5>
          <h5  style={{height:"60px"}} className="card-title">{el.recipe.label}</h5>
          <Link state={el} to = {'/singleRecipe'}  class="btn btn-primary"  >View Recipe</Link>
          
          
          
        </div>
      </div>
      })}
    </div>
    </div>


    

  )
}

export default Home
