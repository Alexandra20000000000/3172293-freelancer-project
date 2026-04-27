// js/navbar

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector (".services__form-container")

        if (!form) return;

        fetch("/views/components/contact-form.html")
        //La respuesta la covierte en texto plano
            .then(response => response.text())
        
        //Inserta el contenido html del nabvar en el contenedor correspondiente
            .then(data => {
                form.innerHTML = data;
        })
         .catch(error => console.log("Error cargando el formulario", error));
            
})