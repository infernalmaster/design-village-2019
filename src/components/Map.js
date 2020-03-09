import React, { Component } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const position = {
  lat: 48.917639,
  lng: 24.718991,
}

const mapIcon = {
  url:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBnZPRDYIwEEDvoJLwxwi4QVdgBCcQdS/ECRjBEewIjMAfCQXPuwYVjQboSy45mr5Lae8Qvui7Yw6Ie041R8LRcBgguqioKKd78Zm0bZ5GSlUEpOEfCLW1QxbHZf2SnbgJr0SQwhyTAoF8LxYF3hepsHJ1xn88w1qIDsF4OethT46twQ8tcgJ+JCI34EcjsgE/TCCdAz6w55pksKcbrbk4pFqpYuuapOuHHfLCUtHaeyapk6XVOl6YK8DHNCJ+9PaU91TJgCA/I/Fr4M+pegCrxlwQ0gSQUgAAAABJRU5ErkJggg==",
}

const mapStyle = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 21 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#000000" }, { lightness: 17 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 18 }],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 19 }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }, { lightness: 17 }],
  },
]

export class Map extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        language="en"
        googleMapsApiKey="AIzaSyBg8BmjYZ1ZxGxX0f_0zNI5J7yRiPjOUZU"
      >
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={13}
          center={position}
          options={{ styles: mapStyle }}
        >
          <Marker position={position} icon={mapIcon} />
        </GoogleMap>
      </LoadScript>
    )
  }
}
