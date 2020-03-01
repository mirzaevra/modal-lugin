function _createModal(options) {
    const myModal = document.createElement('div')
    myModal.classList.add('my-modal')
    myModal.insertAdjacentHTML('afterbegin', `
        <div class="my-modal-overlay">
            <div class="my-modal-window">
                <span class="my-modal-close"></span>
                <div class="my-modal-container">
                    <div class="my-modal-head">
                        <p class="my-modal-head__title">Some title</p>
                    </div>
                    <div class="my-modal-body">
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, hic.</p>
                    </div>
                    <div class="my-modal-footer">
                        <button class="button">Ok</button>
                        <button class="button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `)

    document.body.appendChild(myModal);
    return myModal;
}

$.modal = function (options) {
    const $myModal = _createModal(options);
    return {
        open() {
        },
        close() {
        },
        destroy() {
        }
    }
}
