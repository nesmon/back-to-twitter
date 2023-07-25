// ==UserScript==
// @name         Remove the X from the twitter
// @namespace    MaidScript
// @version      1.1
// @description  Remove the X from the twitter logo and replace it with the bird
// @author       Nenes
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Remplacez "URL_DE_VOTRE_ICONE" par l'URL de l'icône que vous souhaitez utiliser
    const newFaviconUrl = "data:image/png;base64,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";

    // Récupère l'élément de l'icône d'onglet
    const favicon = document.querySelector("link[rel='shortcut icon']") || document.createElement('link');

    // Modifie l'URL de l'icône d'onglet
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('href', newFaviconUrl);

    // Ajoute l'élément modifié au document
    document.head.appendChild(favicon);

    setInterval(() => {
        const logo = document.querySelector('header svg');

        // verifier si le logo a deja été modifié, on coupe le setInterval
        if (logo.parentElement.innerHTML.includes('maidNenesIsHere')) {
            return clearInterval();
        }

        console.log("Logo edited welcome back blue bird!");

        logo.parentElement.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="maidNenesIsHere r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';
    }, 100);
})();