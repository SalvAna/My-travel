import React from 'react';
import Travel from './Travel';

const travels = [
    {
        destination: "Italie",
        distance: "1297km",
        photo:"https://images.salaun-holidays.com/(Image)-image-Italie-Rome-Fontaine-de-Trevi-131-fo_64257101-09032017.jpg",
    },
    {
        destination:"Chine",
        distance: "8017km",
        photo:"https://www.voyages-chine.fr/image/chine/bandeau/lanternes_lijiang_tunnan_20171213111759.jpg",
    },
    {   destination:"Allemagne",
        distance:"506km",
        photo:"https://cdn.pixabay.com/photo/2018/05/06/15/48/city-3378773__340.jpg",
    },
    {   destination:"Suisse",
        distance:"222km",
        photo:"https://cdn.pixabay.com/photo/2016/07/14/13/35/matterhorn-1516733__340.jpg",
    }
];
const Travels = () => (
    <div>
      {travels.map(travel => (
        <Travel destination={travel.destination} photo={travel.photo} distance={travel.distance} />
      ))}
    </div>
  );



export default Travels;