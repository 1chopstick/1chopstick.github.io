"use strict";
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
exports.__esModule = true;
function initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
    });
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";

    var contentString = '<div class="list-group-item list-group-item-action flex-column align-items-start">' +
        '<h5 class="mb-1">West Valley Chinese School</h5>' +
        '<div class="d-flex w-100 justify-content-between">' +
        '<div class="mb-1">西谷中文學校</div>' +
        '<small class="text-muted fst-italic">(sai1 guk1 zung1 man4 hok6 haau6)</small>' +
        '</div>' +
        '<p class="mb-1 fw-light">Offers language classes for the K-12 age group</p>' +
        '<div class="d-flex mt-4">' +
        '<i class="bi bi-geo-alt-fill"></i>' +
        '<small class="px-md-3">21370 Homestead Road, Cupertino, CA, 95014, USA</small>' +
        '</div>' +
        '<div class="d-flex">' +
        '<i class="bi bi-telephone-fill"></i>' +
        '<small class="px-md-3">+1 408 839 7001</small>' +
        '</div>' +
        '<div class="d-flex">' +
        '<i class="bi bi-globe"></i>' +
        '<small class="px-md-3">https://www.wvcls.org</small>' +
        '</div>' +
        '<div class="d-flex">' +
        '<i class="bi bi-envelope-fill"></i>' +
        '<small class="px-md-3">wvcls.principal@yahoo.com</small>' +
        '</div>' +
        '<div class="d-flex justify-content-end mt-4">' +
        '<i class="bi bi-facebook"></i>' +
        '<small class="px-md-3">Facebook</small>' +
        '<i class="bi bi-youtube"></i>' +
        '<small class="px-md-3">Youtube</small>' +
        '</div>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru"
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Uluru (Ayers Rock)"
    });
    marker.addListener("click", function () {
        infowindow.open({
            anchor: marker,
            map: map
        });
    });
}
window.initMap = initMap;
