import heroes, { owners } from './data/heroes';

const API_KEY = "7NNomU45nwcwH7UGnL8uUao83nKbCUZH";

const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5];

const arr3 = arr2.map((elem) => elem * 2);

console.log(arr);
console.log(arr2);
console.log(arr3);


const saludar = (nombre) => {
    return `Hola ${nombre}!!!`;
}

console.log(saludar("David"));


const getUserActive = (name) => ({ name, date: new Date()});

console.log(getUserActive("David"));

const persona = {
    nombre: "David",
    edad: 31,
    ciudad: "Madrid",
};

const { nombre: nombrePersona } = persona;

const getNombrePersona = ({nombre}) => {
    return nombre;
}

console.log(getNombrePersona(persona))
console.log(nombrePersona);


const personas = ["P1", "P2", "P3", "P4", "P5"];
const [p1, p2, , p4, p5] = personas;
console.table({p1, p2, p4, p5})

const returnArray = () => {
    return ["abc", 123];
}

const [letras, numeros] = returnArray();

console.log(letras, numeros)


const state = (value) => {
    return [value, () => { console.log("Hola mundo!") }]
}

const [n, setName] = state("D");
console.log(n);
setName();

console.table(heroes);

const getHeroeById = (id) => {
   return heroes.find((el) => el.id === id);
}

console.log(getHeroeById(1));
console.log(owners);



// Promesas -------------------------------------------------------------------

const getHeroeByIdPromise = ( id ) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject(404);
        }, 1000);
    });
} 


getHeroeByIdPromise(1).then((heroe) => {
    console.log(heroe)
}).catch(err => console.err(err))

getHeroeByIdPromise(100).then(console.log).catch(console.error)


const gif = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g
`);

gif.then((resp) => resp.json())
.then(({data}) => {
    const { url } = data.images.original;
    
    const img = document.createElement("img");
    img.src = url;
    //document.body.append(img);
})
.catch((err) => {
    console.log(err)
})

const getGif = async () => {
    try {
        const resp  = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (e) {
        console.log(e)
    }
}


getGif();

