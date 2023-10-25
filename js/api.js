// Creando el mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.5859106, lng: -58.3789122 },
      zoom: 17
    });

    const marcador = new google.maps.Marker({
      position:{ lat: -34.5859106, lng: -58.3789122 },
      map: map,
      title: "Codo a Codo"
    });
  }