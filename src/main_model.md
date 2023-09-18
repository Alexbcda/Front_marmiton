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





