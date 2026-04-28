import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DayPlan } from '../data/itinerary';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = (color: string) => new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3)"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6]
});

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

interface TravelMapProps {
  itinerary: DayPlan[];
}

export default function TravelMap({ itinerary }: TravelMapProps) {
  // Extract all points for the polyline
  const allPoints = itinerary.flatMap(day => day.spots.map(spot => spot.coordinates));
  
  // Center map on the middle of the route
  const center: [number, number] = [28.5, 120.2];

  return (
    <div className="w-full h-[400px] md:h-full min-h-[400px] bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-primary/10 transition-all duration-300">
      <MapContainer 
        center={center} 
        zoom={7} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapResizer />
        
        {itinerary.map((day, dayIdx) => (
          day.spots.map((spot, spotIdx) => (
            <Marker 
              key={`${dayIdx}-${spotIdx}`} 
              position={spot.coordinates}
              icon={customIcon(day.day === 1 ? '#1a3a3a' : day.day === 2 ? '#5a5a40' : '#8a5a40')}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-sm m-0">{spot.name}</h3>
                  <p className="text-xs text-gray-600 m-0 mt-1">{spot.description}</p>
                </div>
              </Popup>
            </Marker>
          ))
        ))}
        
        <Polyline 
          positions={allPoints} 
          pathOptions={{ color: '#1a3a3a', weight: 3, opacity: 0.6, dashArray: '10, 10' }} 
        />
      </MapContainer>
    </div>
  );
}
