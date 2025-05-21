function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log(data)
       /// ON ECRIT LE CODE ICI ! 
        let containerNav = document.getElementById('nav')
         console.log(containerNav);

         let containerHeader = document.getElementById('header')
         console.log(containerHeader);

         let containerSectionOne = document.getElementById('sectionOne')
         console.log(containerSectionOne);

         let containerSectionDeux =document.getElementById('sectionDeux')
         console.log(containerSectionDeux);
         
         
         let Articleprincipal = document.createElement('Article')
         
         let journal = data.journal
         console.log(journal);
         
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici