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

      // 1. Nom du journal
      let nomJournal = document.getElementById('nomJournal');
      console.log("nomJournal", );
      nomJournal.textContent = journal.nomJournal;
      console.log(" Nom du journal inséré :", journal.nomJournal);

      // 2. Phrase d'accroche
      let phraseAccroche = document.getElementById('phraseAccroche');
      console.log(" Élément phraseAccroche :", phraseAccroche);
      phraseAccroche.textContent = journal.phraseAccroche;
      console.log(" Phrase d'accroche insérée :", journal.phraseAccroche);

      // 3. Article principal
      let sectionOne = document.getElementById('sectionOne');
      let sectionDeux = document.getElementById('sectionDeux');
      let sectionTrois = document.getElementById('sectionTrois');
      let sectionQuatre = document.getElementById('sectionQuatre');

      sectionOne.innerHTML = `<h2>${journal.articlePrincipal.titre}</h2>`;
      console.log(" Titre de l'article principal :", journal.articlePrincipal.titre);

      sectionDeux.innerHTML = `<p>${journal.articlePrincipal.description}</p>`;
      console.log("Description de l'article principal :", journal.articlePrincipal.description);

      sectionTrois.innerHTML = `<small>${journal.articlePrincipal.date}</small>`;
      console.log(" Date de l'article principal :", journal.articlePrincipal.date);

      sectionQuatre.innerHTML = `<img src="${journal.articlePrincipal.image}" alt="Article principal" width="300">`;
      console.log(" Image de l'article principal :", journal.articlePrincipal.image);

      // 4. Autres articles
      const artCont = document.getElementById('articlesSection');
      console.log(" Section des autres articles :", artCont);

      journal.articles.forEach((a, i) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${a.titre}</h3>
          <p>${a.date} — Thème : ${a.theme}</p>
          <img src="${a.image}" alt="${a.titre}" width="250">
        `;
        artCont.appendChild(div);

        console.log(` Article ${i + 1} ajouté :`, a);
      });

      // 5. Thèmes
      const themeCont = document.getElementById('themesSection');
      console.log("Section des thèmes :", themeCont);

      journal.themes.forEach((t, i) => {
        const div = document.createElement('div');
        div.innerHTML = `<h4>${t.nom}</h4><p>${t.description}</p>`;
        themeCont.appendChild(div);

        console.log(`Thème ${i + 1} ajouté :`, t);
      });

      // 6. Auteurs
      const authCont = document.getElementById('auteursSection');
      console.log("Section des auteurs :", authCont);

      journal.auteurs.forEach((u, i) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h4>${u.prenom}</h4>
          <p>${u.typeExperience}</p>
          <p>${u.presentation}</p>
        `;
        authCont.appendChild(div);
 console.log(`Auteur ${i+1} ajouté :`, u);
      });
      
       
         
        
      
       
        
         
       

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici