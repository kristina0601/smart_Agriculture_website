document.addEventListener("DOMContentLoaded", function () {

    console.log("Agriculture Support System Loaded");

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", function () {

            const button = form.querySelector("button");

            button.innerText = "Processing...";
            button.disabled = true;

        });

    });

});