function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
      const journal = data.journal
       // Traitez les données comme vous le souhaitez
      console.log(" journal");

      // coder ici
      let nomJournal = document.getElementById('nomJournal');
      console.log("nomJournal", );
      nomJournal.textContent = journal.nomJournal;
      console.log(" Nom du journal ");

      
      let phraseAccroche = document.getElementById('phraseAccroche');
      phraseAccroche.textContent = journal.phraseAccroche;
      console.log("phraseAccroche ");

      
      let sectionOne = document.getElementById('sectionOne');
      console.log(sectionOne);
      
      let sectionDeux = document.getElementById('sectionDeux');
      console.log(sectionDeux);
      
      let sectionTrois = document.getElementById('sectionTrois');
      console.log(sectionTrois);
      
      let sectionQuatre = document.getElementById('sectionQuatre');
      console.log(sectionQuatre);
      

      sectionOne.innerHTML = `<h2>${journal.articlePrincipal.titre}</h2>`;
     

      sectionDeux.innerHTML = `<p>${journal.articlePrincipal.description}</p>`;
     

      sectionTrois.innerHTML = `<h4>${journal.articlePrincipal.date}`;
      
      sectionQuatre.innerHTML = `<img src="${journal.articlePrincipal.image}" alt="Article principal" width="300">`;
      

      
      const artCont = document.getElementById('articlesSection');
     
const articlesSection = document.getElementById('articlesSection');
console.log('articlesSection');


journal.articles.forEach((article) => {
  const articleDiv = document.createElement('div');
  
 /*let h2 = document.createElement('h2')
  h2.textContent = article.titre
  console.log(h2);
  let main = document.querySelector('main')
  main.appendChild(h2)*/

  articleDiv.innerHTML = `
    <h3>${article.titre}</h3>
    <p>${article.date} </p> 
    <p> ${article.theme}</p>
    <img src="${article.image}" alt="${article.titre}" width="250">
  `;

  articlesSection.appendChild(articleDiv);

  // Affiche l'article dans la console pour vérification
  console.log('articleSection');
});


// SECTION : THEMES
const themesSection = document.getElementById('themesSection');

journal.themes.forEach((theme, index) => {
  const themeDiv = document.createElement('div');
  console.log('themeDiv');
  

  themeDiv.innerHTML = `
    <h4>${theme.nom}</h4>
    <p>${theme.description}</p>
  `;

  themesSection.appendChild(themeDiv);
});


// SECTION : AUTEURS
const auteursSection = document.getElementById('auteursSection');

journal.auteurs.forEach((auteur, index) => {  
  const auteurDiv = document.createElement('div');
  console.log(auteurDiv);
  

  auteurDiv.innerHTML = `
    <h4>${auteur.prenom}</h4>
    <p>${auteur.typeExperience}</p>
    <p>${auteur.presentation}</p>
  `;

  auteursSection.appendChild(auteurDiv);
});
      
       
            

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 