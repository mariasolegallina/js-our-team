const teamMembersDOMElement = document.querySelector('.team-members')
const teamMembersArray = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg',
    }
]

for (let i = 0; i < teamMembersArray.length; i++) {
    const member = teamMembersArray[i]
    
    // creare un div nel DOM che contenga le informazioni su un membro
    const memberDiv = document.createElement("div")
    memberDiv.classList.add("team-member")

    // aggiungere il memberDiv nel DOM
    teamMembersDOMElement.appendChild(memberDiv)

    // creare un div nel DOM e stampare il nome
    const nomeElement = document.createElement("h2")
    nomeElement.textContent = member.nome;

    // creare un div nel DOM e stampare il ruolo
    const ruoloElement = document.createElement("p")
    ruoloElement.textContent = member.ruolo;

    // creare un div nel DOM e stampare l'immagine
    const fotoElement = document.createElement("img")
    fotoElement.src = member.foto;

    // aggiungere i div con le tre informazioni nel DOM
    memberDiv.appendChild(nomeElement)
    memberDiv.appendChild(ruoloElement)
    memberDiv.appendChild(fotoElement)
    
}

