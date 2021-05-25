let modalContainer = document.createElement('div');
modalContainer.setAttribute('id', 'modal');
let customBox = document.createElement('div');
customBox.className = 'custom-box';

function modalShow() {
    customBox.innerHTML += '<div class="contentmodal"><div class="modalleft"><img src="img/modal.jpg" alt=""></div><div class="modalright"><modal class="modalcross"><img id="modal-close" src="img/cross.png" alt=""></modal><p>LE BRUNCH <br> O11ZE <br> DISPONIBLE EN <br> CLICK&COLLECT <br> ET EN <br>LIVRAISON</p><div class="modalresa"><a href="">Réservation</a></div></div></div>';
    modalContainer.appendChild(customBox);
    document.body.appendChild(modalContainer);

    document.getElementById('modal-close').addEventListener('click', () => {
        document.body.removeChild(modalContainer);
    });
}
    
window.onload = modalShow();


