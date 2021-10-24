// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

/* You may have a few 'require' lines above this already */

require("@popperjs/core")

import "bootstrap"
import "../stylesheets/application.scss";
import { Tooltip, Popover } from "bootstrap"

const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// With Turbolinks
document.addEventListener("turbolinks:load", () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new Popover(popoverTriggerEl)
    })

    // var flashDurationInSeconds = 5;
    // var flashContainerId = 'flash-messages';
    
    // function removeFlashMessages() {
    //     $('#' + flashContainerId).remove();
    // }
    
    // setTimeout(removeFlashMessages, flashDurationInSeconds * 1000);
})
