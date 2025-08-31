function showhide(param) {
            var x = document.getElementById(param);
            if (x.style.display == 'none') {
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }
        }
        function toggleTheme() {
            var body = document.body;
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                body.classList.add('light');
            } else {
                body.classList.remove('light');
                body.classList.add('dark');
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            var body = document.body;
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                body.classList.add('dark');
            } else {
                body.classList.add('light');
            }
        });
        
        const popup = document.getElementById("cookiePopup");
        const btn = document.getElementById("acceptCookies");
        //Cuando no hay cookies aceptadas
        if (!localStorage.cookiesAccepted) {
            popup.classList.add("show");
        }

        btn.addEventListener("click", function () {
            localStorage.cookiesAccepted = "true";
            popup.classList.remove("show");
        });