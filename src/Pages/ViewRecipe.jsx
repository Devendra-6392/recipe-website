import React, { useEffect, useState } from 'react'

const ViewRecipe = (props) => {
        const [recipe, setrecipe] = useState([])
        const [input,setinput] = useState('')
        

        
        
              let getData = async ()=>{
                      let res = await fetch(`https://api.edamam.com/search?q=${input}&app_id=d618fb2b&app_key=9f15b3b255d3942e3ecae5f352e50de8`)
                      let data = await res.json();
                      // console.log(data);
                      setrecipe(data.hits)
              }
              useEffect(()=>{
                      getData();
              },[]);
              // setinput(props.input)
              console.log(recipe);

              
                
      
              
        




  return (
    <div>
      {recipe.map((e)=>{
       return <div> 
         <img src={e.recipe.image} alt='' />
         <h4>{e.recipe.lable} </h4>
         
         
         <p>{e.recipe.calories} </p>
         <p>{e.recipe.ingredientLines} </p>
        
       

       

</div>
      
       

      })}
      <button onClick={ViewRecipe}>view </button>
    </div>
  )
}

export default ViewRecipe
