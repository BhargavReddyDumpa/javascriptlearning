async function getJoke()
{
    let joke = await fetch("https://v2.jokeapi.dev/joke/Any",{
        method: "GET"
    })
    let data = await joke.json();
    console.log(data);
}
getJoke();