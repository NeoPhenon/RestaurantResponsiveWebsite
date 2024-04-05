
document.addEventListener("DOMContentLoaded", () => {
    const inputFields = document.querySelectorAll(".form-control");

    inputFields.forEach(input => {
        input.addEventListener("input", (event) => {
            if (event.target.value.trim() !== '') {
                event.target.classList.add("highlightBg");
            } else {
                event.target.classList.remove("highlightBg");
            }
        });
    });

    const form = document.querySelector("form");
    
    form.addEventListener("reset" , () => {
              inputFields.forEach( input => {
                input.classList.remove("highlightBg");
            });
    });
}); // this logic whill dexterously cover not to slip into the dilipidated background after i set up reset button 