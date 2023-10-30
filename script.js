
async function fetchFact() {
    
    const ip = document.getElementById("input").value;
  if(ip.trim().length === 0){
    alert("Please enter a valid text format 😊😊😊");

  }else{
    let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ip}`;
try{
    const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
const strname=data.meals[0].strMeal;

const veg=data.meals[0].strCategory;
const area=data.meals[0].strArea;
const ingredient=data.meals[0].strIngredient1;
const instructions=data.meals[0].strInstructions;

const link=data.meals[0].strYoutube;


const foodname=document.getElementById("name");
foodname.innerHTML+="NAME : " +strname;
// document.appendChild(foodname);


const category=document.getElementById("cat");
category.innerHTML+="Vegitarian : "+veg;


const areae=document.getElementById("area");
areae.innerHTML+="Style : "+area;

const ingrd=document.getElementById("ingredient");
ingrd.innerHTML+="Main Ingredient : "+ingredient;

const inst=document.getElementById("instructions");
inst.innerHTML+="Instructions : "+instructions;

// const dishLink=document.getElementById("link");
// const createLink=document.createElement("a")
// createLink.innerHTML+=link;
// dishLink.innerHTML+=createLink;

const dishLink=document.getElementById("link");
const createLink = document.createElement("a");
createLink.href = link; // Set the href attribute for the link
createLink.innerHTML ="Watch on Youtube : "+ link; // Text for the link
dishLink.innerHTML = ""; // Clear previous content
dishLink.appendChild(createLink);







// console.log(data);
console.log(data.meals[0].strMeal);
console.log(data.meals[0].strCategory);
console.log(data.meals[0].strArea);
console.log(data.meals[0].strIngredient1);
console.log(data.meals[0].strInstructions);
// console.log(data.meals[0].strMealThumb);
console.log(data.meals[0].strYoutube);



const imageContainer = document.getElementById("img");
const imageUrl = data.meals[0].strMealThumb;

if (imageUrl) {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = "Meal Image"; // Add an alt attribute for accessibility
    imageElement.className="img-fluid"
    imageContainer.innerHTML = ""; // Clear previous content
    imageContainer.appendChild(imageElement);
}



        }
        catch(error) {
            // Handle errors, e.g., network errors or parsing errors
            alert('Error:' + error);
        };
    }
}



const btn = document.getElementById("getValue");
btn.addEventListener("click",fetchFact);



