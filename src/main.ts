const app = document.querySelector('#app') as HTMLDivElement;
const container = document.createElement("div") as HTMLDivElement;

// Créez un titre H1
const titleElement = document.createElement("h1");
titleElement.textContent = "Marmitop";

// Créez un conteneur pour les éléments de gauche (nom et lien)
const leftColumn = document.createElement("div");
leftColumn.classList.add('column'); // Ajoutez la classe "column" pour la colonne
// Créez des labels pour chaque champ d'entrée dans la colonne de gauche
const nameLabel = document.createElement("label");
nameLabel.textContent = "Nom de la recette";
const imageLabel = document.createElement("label");
imageLabel.textContent = "Lien de l'image";

// Créez les champs d'entrée dans la colonne de gauche
const nameInput = document.createElement("input") as HTMLInputElement;
nameInput.placeholder = "Nom de la recette";
const imageInput = document.createElement("input") as HTMLInputElement;
imageInput.placeholder = "Lien de l'image";

// Ajoutez les éléments de la colonne de gauche au conteneur
leftColumn.appendChild(nameLabel);
leftColumn.appendChild(nameInput);
leftColumn.appendChild(imageLabel);
leftColumn.appendChild(imageInput);

// Créez un conteneur pour les éléments de droite (durée et note)
const rightColumn = document.createElement("div");
rightColumn.classList.add('column'); // Ajoutez la classe "column" pour la colonne
// Créez des labels pour chaque champ d'entrée dans la colonne de droite
const durationLabel = document.createElement("label");
durationLabel.textContent = "Durée (en minutes)";
const ratingLabel = document.createElement("label");
ratingLabel.textContent = "Note (de 1 à 5)";

// Créez les champs d'entrée dans la colonne de droite
const durationInput = document.createElement("input") as HTMLInputElement;
durationInput.placeholder = "Durée (en minutes)";
durationInput.type = "number"; // Définir le type en nombre
const ratingInput = document.createElement("input") as HTMLInputElement;
ratingInput.placeholder = "Note (de 1 à 5)";
ratingInput.type = "number"; // Définir le type en nombre

// Ajoutez les éléments de la colonne de droite au conteneur
rightColumn.appendChild(durationLabel);
rightColumn.appendChild(durationInput);
rightColumn.appendChild(ratingLabel);
rightColumn.appendChild(ratingInput);

// Créez un bouton "Ajouter"
const addButton = document.createElement('button') as HTMLButtonElement;
addButton.style.color = "red";
addButton.classList.add('ma-class-button');
addButton.innerText = "Ajouter";

addButton.addEventListener('click', async () => {
  // Récupérez les valeurs des champs
  const nom_recette = nameInput.value;
  const lienImage = imageInput.value;
  const duree = durationInput.value;
  const note = ratingInput.value;

  // Affichez les valeurs dans la console
  console.log("Nom de la recette : " + nom_recette);
  console.log("Lien de l'image : " + lienImage);
  console.log("Durée : " + duree + " minutes");
  console.log("Note : " + note);

  const response = await fetch("http://localhost:3433/recettes", {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
        nom_recette, 
        lienImage, 
        duree, 
        note
    }),
  })
  console.log(response)
  const data = await response.json()
  console.log(data)

  createRecipeCard(nom_recette, lienImage, duree, note)

  // Réinitialisez les champs (facultatif)
  nameInput.value = "";
  imageInput.value = "";
  durationInput.value = "";
  ratingInput.value = "";
});

// Ajoutez le titre H1 au conteneur en premier
container.appendChild(titleElement);

// Ajoutez les colonnes (gauche et droite) au conteneur
container.appendChild(leftColumn);
container.appendChild(rightColumn);

// Ajoutez le bouton "Ajouter" au conteneur
container.appendChild(addButton);

// Ajoutez le conteneur au "app"
app.appendChild(container);

// Ajoutez un titre H2 "Mes recettes"
const h2Title = document.createElement("h2");
h2Title.textContent = "Mes recettes";
container.appendChild(h2Title);

// Créez un conteneur pour les cartes de recette
const recipeCardsContainer = document.createElement("div");
recipeCardsContainer.classList.add('recipe-cards-container');

// Fonction pour créer une carte de recette
function createRecipeCard(nomRecette: string, lienImage: string, note: string, duree: string) {
  const card = document.createElement("div");
  card.classList.add('recipe-card');

  // Créez une image de la recette
  const recipeImage = document.createElement("img");
  recipeImage.src = lienImage;
  recipeImage.alt = nomRecette; // Utilisez le nom de la recette comme texte alternatif
  card.appendChild(recipeImage);

  // Créez le nom de la recette
  const recipeName = document.createElement("h3");
  recipeName.textContent = nomRecette;
  card.appendChild(recipeName);

  // Créez la note de la recette
  const recipeNote = document.createElement("p");
  recipeNote.textContent = "Note : " + note;
  card.appendChild(recipeNote);

  // Créez la durée de la recette
  const recipeDuration = document.createElement("p");
  recipeDuration.textContent = "Durée : " + duree + " minutes";
  card.appendChild(recipeDuration);

  recipeCardsContainer.appendChild(card);
}

// Créez une carte exemple et ajoutez-la au conteneur
container.appendChild(recipeCardsContainer);

// Ajoutez le conteneur principal au "app"
app.appendChild(container);

