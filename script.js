let total = 0;
let affichage = '0';
let operateurPrecedent;

// récupère la valeur du bouton et la stocke dans une constante 'valeur'
document.querySelectorAll('.btnChiffre').forEach(btn => {
    btn.addEventListener('click', () => {
        const valeur = btn.textContent;
        
        if (affichage === '0') {
            affichage = valeur; // Remplace '0' par le chiffre cliqué
        } else {
            affichage += valeur; // Ajoute le chiffre à la suite
        }
        
        document.getElementById('affichage').textContent = affichage;
    });
});

// récupère l'operateur du bouton et le stocke dans une constante 'operateur'
document.querySelectorAll('.btnOperateur').forEach(btn => {
    btn.addEventListener('click', () => {
        const operateur = btn.textContent;

        if(operateurPrecedent){
            calculer();
        }else{
            total = parseInt(affichage)
        }
        operateurPrecedent = operateur;
        affichage = '0'
    });
});

document.querySelector('.btnEquals').addEventListener('click', function(){
    calculer();
})

document.querySelector('.btnReset').addEventListener('click', function(){
    affichage = '0';
    total = 0
    operateurPrecedent = undefined;
    document.getElementById('affichage').textContent = '0';
})

document.querySelector('.btnSupp').addEventListener('click', function(){
    if(affichage == '0'){
        affichage = '0';
    }else
        affichage = affichage.slice(0, -1);
    document.getElementById('affichage').textContent = affichage;
})

// fonction permettant d'effectuer les calculs
function calculer() {
    const nombre = parseFloat(affichage);
    
    switch (operateurPrecedent) {
        case '+':
            total += nombre;
            break;
        case '−':
            total -= nombre;
            break;
        case '×':
            total *= nombre;
            break;
        case '÷':
            total /= nombre;
            break;
    }
    
    affichage = '0'; // Réinitialise pour le prochain nombre
    document.getElementById('affichage').textContent = total;
}

