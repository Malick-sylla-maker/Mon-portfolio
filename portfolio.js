document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci ${name}, votre message a bien été envoyé !`);
        // Réinitialise le formulaire
        document.getElementById('contactForm').reset();
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});
