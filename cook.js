fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res => res.json())
.then(data =>  displayStrMeal(data));

 const displayStrMeal =  strMeal =>{
  const  strMealDiv = document.getElementById(' strMeal');
    for (let i = 0; i < strMeal.length; i ++){
        const food =  strMeal[i];
        const foodDiv = document.createElement('div');
        const  h3 = document.createElement('h3');
        h3 . innerText = food .strMealThumb;
        const p = document.createElement('p');
        p.innerText = food . strMealThumb;
        foodDiv.appendChild(h3);
        foodDiv.appendChild(p);
        strMealDiv.appendChild(foodDiv);
}
    
  }   
    
    const foodInfo =`
       <h3 class = "food-name">
       ${food .strMealThumb } </h3>
       <p> ${food .strMealThumb}</p>
       <button onclick ="display food Details('${food . strMealThumb}')"> </button>
         `;
           
          const displayFoodDetail = strMealThumb=>{
            fetch(url)
            const url =`https://www.themealdb.com/api/json/v1/1/list.php?i=list`
           .then (res => res . json())
           .then (data => renderFoodInfo(data[0]));
            
          
          const renderFoodInfo = food =>{
             const foodDiv = document.getElementById('foodDetail');
              foodDiv.innerHTML = `
                <h1>${food.strMealThumb}</h1>
                <p>strDescription${food.StrDescription}</p>
                <img src = ${"https:\/\/www.themealdb.com\/images\/media\/meals\/sbx7n71587673021.jpg"}>
            
            `           
          }
        }

          
    const onSubmit = e =>{
    

         const onChange = (e) => {
           setQuery(e.target.value);
         }
        }
