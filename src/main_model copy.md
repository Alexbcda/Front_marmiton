// Sélectionnez un élément du DOM avec l'ID "app" et stockez-le dans la variable 'app'
```ts
const app = document.querySelector('#app') as HTMLDivElement;
```

// Créez un nouvel élément HTML <div> et stockez-le dans la variable 'container'
```ts
const container = document.createElement("div") as HTMLDivElement;
```

// Créez un nouvel élément HTML <input> et stockez-le dans la variable 'input'
```ts
const input = document.createElement("input") as HTMLInputElement;
```

// Créez un nouvel élément HTML <button> et stockez-le dans la variable 'button'
```ts
const button = document.createElement('button') as HTMLButtonElement;
```

// Modifiez le style CSS de 'button' pour définir sa couleur de texte sur "rouge"
button.style.color = "red";
```ts
// Ajoutez la classe CSS 'ma-class-button' à 'button'
button.classList.add('ma-class-button');

// Définissez le texte interne de 'button' comme "Mon bouton"
button.innerText = "Mon bouton";

// Ajoutez un écouteur d'événements de clic à 'button' qui affiche la valeur de 'input' dans la console
button.addEventListener('click', () => {
  console.log('valeur de l\'input : ' + input.value);
});

// Ajoutez 'input' en tant qu'enfant de 'container'
container.appendChild(input);

// Ajoutez 'button' en tant qu'enfant de 'container'
container.appendChild(button);

// Ajoutez 'container' en tant qu'enfant de 'app'
app.appendChild(container);




//////////  cours Thomas  ////////

const app = document.querySelector('#app') as HTMLDivElement;

const titre = document.createElement("h1") as HTMLHeadingElement;
titre.classList.add('titre')
titre.innerText = 'Marmitop'

const form = document.createElement("div") as HTMLDivElement;
form.classList.add('form')

const inputs = document.createElement("div") as HTMLDivElement;
inputs.classList.add('inputs')

const btn = document.createElement("button") as HTMLButtonElement;
btn.innerText = 'ajouter une recette'
///////////





form.appendChild(inputs)
form.appendChild(btn)

app.appendChild(titre)
app.appendChild(form)
app.appendChild(inputs)



///////////////

///////cors   /////
# Gérer les cors avec express

## Installation

```bash
npm install cors
npm install -D @types/cors
```

## Utilisation

```ts
import cors from "cors"

const app = express()
app.use(cors())
```


//// /////////


/////// API   ///////
# Requête POST avec express

## Server

```bash
npm i body-parser
```

```ts
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

interface IMaRequetBody {
  name: string
}

app.post("/send-name", (req: Request<IMaRequetBody>, res) => {
  const name = req.body.name
  console.log(name)
  res.json({ name: name })
})
```

## Client

```ts
async function init() {
  const response = await fetch("http://localhost:3030/send-name", {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
      name: "John",
    }),
  })
  console.log(response)
  const data = await response.json()
  console.log(data)
}

init()





// Sélectionnez l'élément #app
const app: HTMLDivElement = document.querySelector('#app')!;

// Créez un conteneur principal
const container: HTMLDivElement = document.createElement("div");

// Créez un titre H1
const titleElement: HTMLHeadingElement = document.createElement("h1");
titleElement.textContent = "Marmitop";

// Créez un conteneur pour les éléments de gauche (nom et lien)
const leftColumn: HTMLDivElement = document.createElement("div");
leftColumn.classList.add('column'); // Ajoutez la classe "column" pour la colonne

// Créez des labels pour chaque champ d'entrée dans la colonne de gauche
const nameLabel: HTMLLabelElement = document.createElement("label");
nameLabel.textContent = "Nom de la recette";
const imageLabel: HTMLLabelElement = document.createElement("label");
imageLabel.textContent = "Lien de l'image";

// Créez les champs d'entrée dans la colonne de gauche
const nameInput: HTMLInputElement = document.createElement("input");
nameInput.placeholder = "Nom de la recette";
const imageInput: HTMLInputElement = document.createElement("input");
imageInput.placeholder = "Lien de l'image";

// Ajoutez les éléments de la colonne de gauche au conteneur
leftColumn.appendChild(nameLabel);
leftColumn.appendChild(nameInput);
leftColumn.appendChild(imageLabel);
leftColumn.appendChild(imageInput);

// Créez un conteneur pour les éléments de droite (durée et note)
const rightColumn: HTMLDivElement = document.createElement("div");
rightColumn.classList.add('column'); // Ajoutez la classe "column" pour la colonne

// Créez des labels pour chaque champ d'entrée dans la colonne de droite
const durationLabel: HTMLLabelElement = document.createElement("label");
durationLabel.textContent = "Durée (en minutes)";
const ratingLabel: HTMLLabelElement = document.createElement("label");
ratingLabel.textContent = "Note (de 1 à 5)";

// Créez les champs d'entrée dans la colonne de droite
const durationInput: HTMLInputElement = document.createElement("input");
durationInput.placeholder = "Durée (en minutes)";
durationInput.type = "number"; // Définir le type en nombre
const ratingInput: HTMLInputElement = document.createElement("input");
ratingInput.placeholder = "Note (de 1 à 5)";
ratingInput.type = "number"; // Définir le type en nombre

// Ajoutez les éléments de la colonne de droite au conteneur
rightColumn.appendChild(durationLabel);
rightColumn.appendChild(durationInput);
rightColumn.appendChild(ratingLabel);
rightColumn.appendChild(ratingInput);

// Créez un bouton "Ajouter"
const addButton: HTMLButtonElement = document.createElement('button');
addButton.style.color = "red";
addButton.classList.add('ma-class-button');
addButton.innerText = "Ajouter";

addButton.addEventListener('click', async () => {
  // Récupérez les valeurs des champs
  const nom_recette: string = nameInput.value;
  const lienImage: string = imageInput.value;
  const duree: number = parseFloat(durationInput.value);
  const note: number = parseFloat(ratingInput.value);

  // Affichez les valeurs dans la console
  console.log("Nom de la recette : " + nom_recette);
  console.log("Lien de l'image : " + lienImage);
  console.log("Durée : " + duree + " minutes");
  console.log("Note : " + note);

  const response = await fetch("http://localhost:3020/recettes", {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
      nom_recette,
      lienImage, // Utilisez le lien URL directement
      duree,
      note,
    }),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);

  createRecipeCard(data); // Utilisez la réponse JSON pour créer la carte de recette

  // Réinitialisez les champs (facultatif)
  nameInput.value = "";
  imageInput.value = "";
  durationInput.value = "";
  ratingInput.value = "";
});

// Ajoutez un titre H2 "Mes recettes"
const h2Title: HTMLHeadingElement = document.createElement("h2");
h2Title.textContent = "Mes recettes";

// Créez un conteneur pour les cartes de recette
const recipeCardsContainer: HTMLDivElement = document.createElement("div");
recipeCardsContainer.classList.add('recipe-cards-container');

// Fonction pour créer une carte de recette
function createRecipeCard(recipe: any) {
  const nomRecette: string = recipe.nom_recette;
  const lienImage: string = recipe.lienImage; // Utilisez le lien URL directement
  const note: number = recipe.note;
  const duree: number = recipe.duree;

  const card: HTMLDivElement = document.createElement("div");
  card.classList.add('recipe-card');

  // Créez une image de la recette
  const recipeImage: HTMLImageElement = document.createElement("img");
  recipeImage.src = lienImage; // Utilisez le lien URL d'image directement
  recipeImage.alt = nomRecette; // Utilisez le nom de la recette comme texte alternatif
  card.appendChild(recipeImage);

  // Créez le nom de la recette
  const recipeName: HTMLHeadingElement = document.createElement("h3");
  recipeName.textContent = nomRecette;
  card.appendChild(recipeName);

  // Créez la note de la recette
  const recipeNote: HTMLParagraphElement = document.createElement("p");
  recipeNote.textContent = "Note : " + note;
  card.appendChild(recipeNote);

  // Créez la durée de la recette
  const recipeDuration: HTMLParagraphElement = document.createElement("p");
  recipeDuration.textContent = "Durée : " + duree + " minutes";
  card.appendChild(recipeDuration);

  // Créez un bouton "Supprimer"
  const deleteButton: HTMLButtonElement = document.createElement('button');
  deleteButton.textContent = "Supprimer";
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => deleteRecipe(recipe.id)); // Appel de la fonction deleteRecipe lors du clic
  card.appendChild(deleteButton);

  // Ajoutez un attribut data-id à la carte pour stocker l'ID de la recette
  card.setAttribute('data-id', recipe.id);

  // Créez un bouton "Mettre à jour"
  const updateButton: HTMLButtonElement = document.createElement('button');
  updateButton.textContent = 'Mettre à jour';
  updateButton.classList.add('update-button');
  updateButton.addEventListener('click', () => openUpdateForm(recipe));
  card.appendChild(updateButton);

  recipeCardsContainer.appendChild(card);
}

// Fonction pour supprimer une recette
async function deleteRecipe(recipeId: number) {
  try {
    const response = await fetch(`http://localhost:3020/recettes/${recipeId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('La suppression a échoué avec un statut ' + response.status);
    }

    // Supprimez la carte de recette de l'interface utilisateur
    const cardToDelete: HTMLElement | null = recipeCardsContainer.querySelector(`[data-id="${recipeId}"]`);
    if (cardToDelete) {
      recipeCardsContainer.removeChild(cardToDelete);
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la suppression de la recette :', error);
  }
}

// Créez une fonction pour créer un formulaire de mise à jour
function createUpdateForm(recipe: any): HTMLFormElement {
  const updateForm: HTMLFormElement = document.createElement("form");
  updateForm.classList.add("update-form");

  const nameLabel: HTMLLabelElement = document.createElement("label");
  nameLabel.textContent = "Nom de la recette";
  const nameInput: HTMLInputElement = document.createElement("input");
  nameInput.value = recipe.nom_recette;
  nameInput.required = true;
  nameLabel.appendChild(nameInput);

  const imageLabel: HTMLLabelElement = document.createElement("label");
  imageLabel.textContent = "Lien de l'image";
  const imageInput: HTMLInputElement = document.createElement("input");
  imageInput.value = recipe.lienImage;
  imageInput.required = true;
  imageLabel.appendChild(imageInput);

  const durationLabel: HTMLLabelElement = document.createElement("label");
  durationLabel.textContent = "Durée (en minutes)";
  const durationInput: HTMLInputElement = document.createElement("input");
  durationInput.value = recipe.duree;
  durationInput.type = "number";
  durationInput.required = true;
  durationLabel.appendChild(durationInput);

  const ratingLabel: HTMLLabelElement = document.createElement("label");
  ratingLabel.textContent = "Note (de 1 à 5)";
  const ratingInput: HTMLInputElement = document.createElement("input");
  ratingInput.value = recipe.note;
  ratingInput.type = "number";
  ratingInput.required = true;
  ratingLabel.appendChild(ratingInput);

  const updateButton: HTMLButtonElement = document.createElement("button");
  updateButton.type = "submit";
  updateButton.textContent = "Mettre à jour";

  updateForm.appendChild(nameLabel);
  updateForm.appendChild(imageLabel);
  updateForm.appendChild(durationLabel);
  updateForm.appendChild(ratingLabel);
  updateForm.appendChild(updateButton);

  // Écoutez l'événement de soumission du formulaire
  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedRecipe = {
      nom_recette: nameInput.value,
      lienImage: imageInput.value,
      duree: parseFloat(durationInput.value),
      note: parseFloat(ratingInput.value),
    };

    // Appelez la fonction de mise à jour ici avec l'ID de la recette et les nouvelles données
    updateRecipe(recipe.id, updatedRecipe);
  });

  return updateForm;
}

// Créez une fonction pour ajouter un bouton de mise à jour à une carte de recette
function addUpdateButtonToCard(card: HTMLElement, recipe: any) {
  const updateButton: HTMLButtonElement = document.createElement("button");
  updateButton.textContent = "Mettre à jour";
  updateButton.classList.add("update-button");

  // Ajoutez un gestionnaire d'événements pour ouvrir le formulaire de mise à jour
  updateButton.addEventListener("click", () => {
    // Créez le formulaire de mise à jour et ajoutez-le à la carte de recette
    const updateForm: HTMLFormElement = createUpdateForm(recipe);
    card.appendChild(updateForm);

    // Désactivez le bouton de mise à jour une fois que le formulaire est ouvert
    updateButton.disabled = true;
  });

  // Ajoutez le bouton de mise à jour à la carte de recette
  card.appendChild(updateButton);
}

// Fonction pour mettre à jour une recette
async function updateRecipe(recipeId: number, updatedRecipe: any) {
  try {
    const response = await fetch(`http://localhost:3020/recettes/${recipeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (!response.ok) {
      throw new Error('La mise à jour a échoué avec un statut ' + response.status);
    }

    // Mettez à jour la carte de recette avec les nouvelles données
    const cardToUpdate: HTMLElement | null = recipeCardsContainer.querySelector(`[data-id="${recipeId}"]`);
    if (cardToUpdate) {
      const recipeNameElement: HTMLHeadingElement | null = cardToUpdate.querySelector('h3');
      if (recipeNameElement) {
        recipeNameElement.textContent = updatedRecipe.nom_recette;
        // Mettez à jour les autres champs de la carte de recette de la même manière
      }
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la mise à jour de la recette :', error);
  }
}

// Créez la fonction fetchAllRecipes
async function fetchAllRecipes() {
  try {
    const response = await fetch('http://localhost:3020/recettes'); // Mettez à jour le port si nécessaire
    if (!response.ok) {
      throw new Error('La requête a échoué avec un statut ' + response.status);
    }
    const recettes: any[] = await response.json();

    // Effacez le contenu actuel du conteneur de cartes de recettes
    recipeCardsContainer.innerHTML = '';

    // Traitez les données recettes ici et appelez createRecipeCard pour chaque recette
    recettes.forEach((recette: any) => {
      createRecipeCard(recette);
    });

    // Ajoutez le conteneur de cartes de recettes au DOM
    container.appendChild(recipeCardsContainer);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des recettes :', error);
  }
}

// Appelez fetchAllRecipes pour charger les recettes au chargement de la page
fetchAllRecipes();

// Ajoutez le titre H1 au conteneur en premier
container.appendChild(titleElement);

// Ajoutez les colonnes (gauche et droite) au conteneur
container.appendChild(leftColumn);
container.appendChild(rightColumn);

// Ajoutez le bouton "Ajouter" au conteneur
container.appendChild(addButton);

// Ajoutez un titre H2 "Mes recettes"
container.appendChild(h2Title);

// Ajoutez le conteneur principal au "app"
app.appendChild(container);
