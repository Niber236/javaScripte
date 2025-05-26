
     .then((data) => {
       // Traitez les données comme vous le souhaite
       
       const journal = data.journal;
       console.log(journal.nomJournal);
       /// ON ECRIT LE CODE ICI ! 
       
         let containerNav = document.getElementById('nomJournal');
  console .log(containerNav);
  containerNav.textContent = journal.nomJournal;

  console.log(journal.phraseAccroche);
  let containerPhrase = document.getElementById('phraseAccroche');
  console.log(containerPhrase);
  containerPhrase.textContent = journal.phraseAccroche;

  console.log(journal.articlePrincipal.titre);
  let sectionOne = document.getElementById('sectionOne');
  console.log(sectionOne);
  sectionOne.innerHTML = `<h2>${journal.articlePrincipal.titre}</h2>`;

  console.log(journal.articlePrincipal.description);
  let sectionDeux = document.getElementById('sectionDeux');
  console.log(sectionDeux);
  sectionDeux.innerHTML = `<p>${journal.articlePrincipal.description}</p>`;

  console.log(journal.articlePrincipal.date);
  let sectionTrois = document.getElementById('sectionTrois');
  console.log(sectionTrois);
  sectionTrois.innerHTML = `<small>${journal.articlePrincipal.date}</small>`;

  console.log(journal.articlePrincipal.image);
  let sectionQuatre = document.getElementById('sectionQuatre');
  console.log(sectionQuatre);
  sectionQuatre.innerHTML = `<img src="${journal.articlePrincipal.image}" alt="Article principal" width="300">`;

  let articlesSection = document.getElementById('articlesSection');
  console.log(articlesSection);
  journal.articles.forEach((article) => {
    console.log(article.titre);
    console.log(article.date);
    console.log(article.theme);
    console.log(article.image);

    let div = document.createElement('div');
    div.innerHTML = `
      <h3>${article.titre}</h3>
      <p>${article.date} — Thème : ${article.theme}</p>
      <img src="${article.image}" alt="${article.titre}" width="250">
    `;
    articlesSection.appendChild(div);
  });

  let themesSection = document.getElementById('themesSection');
  console.log(themesSection);
  journal.themes.forEach((theme) => {
    console.log(theme.nom);
    console.log(theme.description);

    let div = document.createElement('div');
    div.innerHTML = `<h4>${theme.nom}</h4><p>${theme.description}</p>`;
    themesSection.appendChild(div);
  });

  let auteursSection = document.getElementById('auteursSection');
  console.log(auteursSection);
  journal.auteurs.forEach((auteur) => {
    console.log(auteur.prenom);
    console.log(auteur.typeExperience);
    console.log(auteur.presentation);

    let div = document.createElement('div');
    div.innerHTML = `
      <h4>${auteur.prenom}</h4>
      <p><em>${auteur.typeExperience}</em></p>
      <p>${auteur.presentation}</p>
    `; 

         

         
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici