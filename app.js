/* console.log("Dad Jokes Starter");

const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  
  fetchDadJoke();
});

const fetchDadJoke = async()=>{
    result.textContent = 'Loading....';

    try {
        const resp = await fetch(url, {
          headers: {
            Accept: "application/json",
            "User-Agent": "learning app",
          },
        });
        const data = await resp.json();
        result.textContent = data.joke;
    } catch (error) {
        result.textContent = 'There is an error....'
    }
    
}

fetchDadJoke()

 */

const url = "https://icanhazdadjoke.com/sss";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  try {
    result.textContent = "Loading...";
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learing app",
      },
    });
    if(!resp.ok){
        throw new Error('There is an Error!,,')
    }
    const data = await resp.json();
    result.textContent = data.joke;
  } catch (error) {
    console.log(error);
    result.textContent = "There is an error...";
   
  }
};

fetchDadJoke();
