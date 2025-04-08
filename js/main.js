const bouton = document.getElementById("bouton");
const pays = document.querySelector("#pays");
const resultat = document.querySelector("#resultat");
bouton.addEventListener("click", async function(){
    try {
        const response = await axios.get('https://restcountries.com/v3.1/name/'+ pays.value);
        console.log(response.data);    
        const valeur = response.data[0];
        const devise = Object.values(valeur.currencies)[0].name;
        console.log(devise);
        resultat.innerHTML = devise;
    } catch (error) {
        console.error("Erreur Axios:", error);
    }  
})