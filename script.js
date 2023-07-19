

// With the help of ! PROMISES
// https://icanhazdadjoke.com/
const jokes  = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = () => {


//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((response)=> response.json())
//     .then((data) => {
//         jokes.innerHTML =  data.joke;
//     }).catch((error) =>{
//         console.log(error);
//     })
// }

// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();


//******* ASync await */

//for traditional function starting m async add krna hota h jaise

// async function generateJokes(){}


const generateJokes = async() => {

try{
    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }

   const response = await fetch('https://icanhazdadjoke.com', setHeader)
   const data     = await response.json();
   jokes.innerHTML =  data.joke;
}catch(error) {
    console.log(`the error is ${error}`);

}

}
    

jokeBtn.addEventListener('click', generateJokes);
generateJokes();