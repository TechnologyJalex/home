    $(document).ready(function() {
        var filterForm = document.getElementById("filterForm");
        filterForm.style.display = "none";

        $(".betDetail").click(function() {
            $.ajax({
                type: "POST",
                url: "/Account/GetPlayerBetLimits",
                contentType: "application/json; charset=utf-8",
                dataType: "html",
                success: function(response) {
                    $("#playerBetLimits").find(".modal-body").html(response);
                    $("#playerBetLimits").modal('show');
                }
            });
        });

        function submitForm({
            gameTypeValue = null,
            categoryValue = null,
            categoryIdValue = 0,
            searchtextValue = null,
            gameSubtypeValue = null,
            tagsValue = null,
            onlyFavoritesValue = false,
            onlyRecentValue = false
        }) {
            var gameTypeInput = document.getElementById("gameTypeInput");
            var categoryInput = document.getElementById("categoryInput");
            var categoryIdInput = document.getElementById("categoryIdInput");
            var searchtextInput = document.getElementById("searchtextInput");
            var gameSubtypeInput = document.getElementById("gameSubtypeInput");
            var tagsInput = document.getElementById("tagsInput");
            var onlyFavoritesInput = document.getElementById("onlyFavoritesInput");
            var onlyRecentInput = document.getElementById("onlyRecentInput");

            if (gameTypeValue !== null) gameTypeInput.value = gameTypeValue;
            if (categoryValue !== null) categoryInput.value = categoryValue;
            if (categoryIdValue !== null) categoryIdInput.value = categoryIdValue;
            if (searchtextValue !== null) searchtextInput.value = searchtextValue;
            if (gameSubtypeValue !== null) gameSubtypeInput.value = gameSubtypeValue;
            if (tagsValue !== null) tagsInput.value = tagsValue;
            onlyFavoritesInput.value = onlyFavoritesValue;
            onlyRecentInput.value = onlyRecentValue;

            var filterForm = document.getElementById("filterForm");
            filterForm.submit();
        }

        function RedirectCasinoLiveFromIntoMenu() {
            var gameTypeNavInput = document.getElementById("gameTypeIntoMenuInput");
            gameTypeNavInput.value = "Casino Vivo"
            var filterForm = document.getElementById("filterFormIntoMenu");
            filterForm.submit();
        }

        setTimeout(() => {
            if ($(".casinoreels .tournament-container").length > 0) {
                var swiperTournaments = new Swiper(".casinoreels .tournament-container", {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    observer: true,
                    pagination: {
                        el: ".casinoreels .tournament-container .swiper-pagination",
                        clickable: true,
                    },
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                });
            }
        }, 200);

        $(function() {
            $('body').on('click', '.modal-link', function(e) {
                e.preventDefault();

                $("#TournamentDetails").remove();

                $.get($(this).data("targeturl"), function(data) {

                    $('<div class="modal modalTournament fade" id="TournamentDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel aria-hidden="true">' +
                        '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content" id= "modalbody" >' +
                        data + '</div></div></div>').modal();

                });
            });
        });

        function updateTime() {
            const now = new Date();
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            document.getElementById('current-time').textContent = 'Hora: ' + now.toLocaleTimeString('es-ES', options);

            const dateOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            document.getElementById('current-date').textContent = 'Fecha: ' + now.toLocaleDateString('es-ES', dateOptions);
        }

        updateTime(); // Actualizar al cargar la página
        setInterval(updateTime, 1000); // Actualizar cada segundo

        function CallSetLanguage(val) {
            window.location.href = "/Language/SetLanguage?name=" + val;
        }

        window.CloseModal = function() {
            if (LC_API.chat_window_hidden()) {
                LC_API.minimize_chat_window();
            }
            $("#btnCloseGame").click();
            $('#btnCloseGame').show();
            $('#fullScreen').show();
        };

        var isLogged = false;
        var isMobileOrTablet = 'False' == "True";
        var dateFormat = 'dd/mm/yy';
        var decimalSep = ',';

        awem.isMobileOrTablet = function() {
            return isMobileOrTablet;
        };
        awem.clientDict.NoRecFound = AllMessages.Grid_NoRecordsFound;
        utils.init(dateFormat, isMobileOrTablet, decimalSep);

        var deviceId = 6;

        if (isMobileOrTablet) {
            deviceId = 7;
        }

        (function() {
            'use strict';
            window.addEventListener('load', function() {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();

        $(document).ready(function() {
            hideChatWidget();
        });

        function hideChatWidget() {
            try {
                var iframe = document.getElementById('chat-widget');

                if (iframe != null) {
                    if (typeof(LC_API) !== "undefined" && LC_API !== null) {
                        if (LC_API.is_loaded && LC_API.chat_window_minimized()) {
                            LC_API.hide_chat_window();
                            return;
                        }
                    }
                }

                window.setTimeout(hideChatWidget, 100);
            } catch (error) {
                window.setTimeout(hideChatWidget, 100);
            }
        }

        var filterFormNav = document.getElementById("filterFormNav");
        filterFormNav.style.display = "none";

        function RedirectCasinoLive() {
            var gameTypeNavInput = document.getElementById("gameTypeNavInput");
            gameTypeNavInput.value = "Casino Vivo"
            var filterFormNav = document.getElementById("filterFormNav");
            filterFormNav.submit();
        }
        var AllMessages = {
            GenericDialog_Warning_Title: "Atención",
            GenericDialog_Successful_Title: "Operación exitosa",
            GenericDialog_Successful_Message: "La acción ejecutada se ha realizado correctamente.",
            Message_MustLoginToAccessSite: "Debes hacer Login para acceder al sitio.",
            Message_ServerIsBusy: "El servidor esta tardando demasiado en traer la información. Pruebe nuevamente en unos momentos.",
            Message_UnexpectedError: "Ha ocurrido un error inesperado y estamos trabajando en su corrección. Muchas Gracias.",
            Message_MustLoginToPlay: "Debes hacer Login para poder jugar.",
            Home_GamesCount: "juegos",
            Operation_GAMECREDIT: "GANADO",
            Operation_GAMEDEBIT: "APOSTADO",
            Operation_WITHDRAW: "EXTRACCION",
            Operation_DEPOSIT: "DEPOSITO",
            Operation_DEPOSIT_BONO: "DEPOSITO (BONO)",
            Operation_PLAYERTRANSFER: "TRANSFERENCIA",
            Grid_NoRecordsFound: "registros no encontrados",
            // ... add others
        };

        function handleAjaxError(xhr, textStatus, error) {
            $("body").css('cursor', 'auto');
            if (textStatus === 'timeout') {
                alert(AllMessages.Message_ServerIsBusy);
            } else {
                alert(textStatus + error);
            }
        }

        (function(h, o, t, j, a, r) {
            h.hj = h.hj || function() {
                (h.hj.q = h.hj.q || []).push(arguments)
            };
            h._hjSettings = {
                hjid: 2534450,
                hjsv: 6
            };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-161714617-2');
        const eventData = {
            "eventImageSrc": "/assets/img/banner-tournament-superjuegos-desktop.jpg",
            "eventInformation": [
                "1. El torneo de Super Juegos consiste en varios torneos diarios de un solo juego.",
                "2. Los torneos se realizarán desde el 13/12 hasta el 19/12 (En total son 7 torneos).",
                "3. Cada torneo inicia a las 09:00 (GMT-4) y terminarán a las 23:00 (GMT-4).",
                "4. Los ganadores serán premiados en un plazo máximo de 20 Minutos.",
                "5. Todo jugador que participe en la promoción reconoce haber leído y aceptado los términos y condiciones.",
                "6. La compañía se reserva el derecho de modificar, cancelar o terminar la promoción en cualquier momento.",
                "7. Premio por torneo 200.000 ARS a repartir.",
                "8. Juegos que participan por torneo:",
                "   - Torneo Lunes: Mustang Gold",
                "   - Torneo Martes: Heart of Rio",
                "   - Torneo Miércoles: Pyramid King",
                "   - Torneo Jueves: Chilli Heat",
                "   - Torneo Viernes: Wolf Gold",
                "   - Torneo Sábado: Christmas Carol Megaways",
                "   - Torneo Domingo: Great Rhino Megaways",
                "9. Se premiarán 30 jugadores por torneo. Los premios se repartirán de la siguiente forma:"
            ],
            "eventTableData": [
                { "position": "1 lugar", "amount": "50.000,00" },
                { "position": "2 lugar", "amount": "32.000,00" },
                { "position": "3 lugar", "amount": "20.000,00" },
                { "position": "4 lugar", "amount": "16.000,00" },
                { "position": "5 lugar", "amount": "12.000,00" },
                { "position": "6 lugar", "amount": "10.000,00" },
                { "position": "7 lugar", "amount": "8.000,00" },
                { "position": "8 lugar", "amount": "6.000,00" },
                { "position": "9 lugar", "amount": "5.000,00" },
                { "position": "10 lugar", "amount": "3.000,00" },
                { "position": "11-20 lugar", "amount": "2.000,00" },
                { "position": "21-30 lugar", "amount": "1.800,00" }
            ]
        };

        const eventInfoList = document.getElementById("eventInfoList");
        eventData.eventInformation.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            eventInfoList.appendChild(listItem);
        });

        const eventTableBody = document.getElementById("eventTableBody");
        eventData.eventTableData.forEach(rowData => {
            const row = document.createElement("tr");
            const positionCell = document.createElement("td");
            const amountCell = document.createElement("td");
            positionCell.textContent = rowData.position;
            amountCell.textContent = rowData.amount;
            row.appendChild(positionCell);
            row.appendChild(amountCell);
            eventTableBody.appendChild(row);
        });

        const eventImage = document.getElementById("eventImage");
        eventImage.src = eventData.eventImageSrc;
    });