
import css from "../css/styles.css";

const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
{
    meals: [
        {
            idMeal: '52873',
            strMeal: 'Beef Dumpling Stew',
            strDrinkAlternate: null,
            strCategory: 'Beef',
            strArea: 'British',
            strInstructions: 'Long description',
            strMealThumb:
                'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
            strTags: 'Stew,Baking',
            strYoutube: 'https://www.youtube.com/watch?v=6NgheY-r5t0',
            strIngredient1: 'Olive Oil',
            strIngredient2: 'Butter',
            strIngredient3: 'Beef',
            strIngredient4: 'Plain Flour',
            strIngredient5: 'Garlic',
            strIngredient6: 'Onions',
            strIngredient7: 'Celery',
            strIngredient8: 'Carrots',
            strIngredient9: 'Leek',
            strIngredient10: 'Swede',
            strIngredient11: 'Red Wine',
            strIngredient12: 'Beef Stock',
            strIngredient13: 'Bay Leaf',
            strIngredient14: 'Thyme',
            strIngredient15: 'Parsley',
            strIngredient16: 'Plain Flour',
            strIngredient17: 'Baking Powder',
            strIngredient18: 'Suet',
            strIngredient19: 'Water',
            strIngredient20: '',
            strMeasure1: '2 tbs',
            strMeasure2: '25g',
            strMeasure3: '750g',
            strMeasure4: '2 tblsp ',
            strMeasure5: '2 cloves minced',
            strMeasure6: '175g',
            strMeasure7: '150g',
            strMeasure8: '150g',
            strMeasure9: '2 chopped',
            strMeasure10: '200g',
            strMeasure11: '150ml',
            strMeasure12: '500g',
            strMeasure13: '2',
            strMeasure14: '3 tbs',
            strMeasure15: '3 tblsp chopped',
            strMeasure16: '125g',
            strMeasure17: '1 tsp ',
            strMeasure18: '60g',
            strMeasure19: 'Splash',
            strMeasure20: '',
            strSource:
                'https://www.bbc.co.uk/food/recipes/beefstewwithdumpling_87333',
            dateModified: null
        }
    ];
}
get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});
const createMeal = meal => {
    const ingredients = [];

    // Get all ingredients from the object. Up to 20
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            // Stop if there are no more ingredients
            break;
        }
    }

    const newInnerHTML = `
<div class="row">
    <div class="columns five">
        <img src="${meal.strMealThumb}" alt="Meal Image">
        ${meal.strCategory
            ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
            : ''
        }
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags
            ? `<p><strong>Tags:</strong> ${meal.strTags
                .split(',')
                .join(', ')}</p>`
            : ''
        }
        <h5>Ingredients:</h5>
        <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    </div>
    <div class="columns seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
    </div>
</div>
${meal.strYoutube
            ? `
<div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
    </div>
</div>`
            : ''
        }
`;

    meal_container.innerHTML = newInnerHTML;
};
