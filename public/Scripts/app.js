//Iksang Yoo/300893315/Oct-9-20/app.js
// IIFE -- Immediately Invoked Function Expression
(function(){

    function start()
    {
        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/bscontact-list');
                }
            });
        }
    }

    window.addEventListener("load", start);

})();