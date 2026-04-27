// js/card/.js


// containerSelector es un selector css donde van las cards

export async function loadCards(containerSelector, cardIds = []) {

    const container = document.querySelector(containerSelector);
    if (!container) return;

    try {
        
        //Hacemos dos flech al mismo tiempo uno es para la plantilla de la card y el otro es para los datos
        const [templateRes, dataRes] = await Promise.all([    
            fetch("/views/components/card.html"),
            fetch("/data/cards.json")

        ])

        const template = await templateRes.text();
        const cards = await dataRes.json();

    
        //Filtro por si se proporciona ID
        const filteredCards = cardIds.length ? cardIds.filter (card => cardIds.includes(card.id)) : cards;  // Si no hay ID las muestra todas con esta funcion que se coloco al final

        filteredCards.forEach(card => {
            let html = template
            .replace("{{title}}", card.title)
            .replace("{{icon1}}", card.icon1)
            .replace("{{icon2}}", card.icon2)
            .replace("{{description}}", card.description)

            //Agregamos la acrd al contenedor del DOM
            container.innerHTML +=  html;
        })


    } catch (error) {
        console.log("Error cargando las cards", error)
    
    }

}
