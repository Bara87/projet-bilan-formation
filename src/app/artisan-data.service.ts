import { Injectable } from '@angular/core';

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: string;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanDataService {
  private artisans: Artisan[] = [
    {
      id: '1',
      name: 'Vallis Bellemare',
      specialty: 'Plombier',
      note: '4',
      location: 'Vienne',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'v.bellemare@gmail.com',
      website: 'https://plomberie-bellemare.com',
      category: 'Bâtiment',
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: '2',
      name: 'Amitee Lécuyer',
      specialty: 'Couturier',
      note: '4.5',
      location: 'Annecy',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'a.amitee@hotmail.com',
      website: 'https://lecuyer-couture.com',
      category: 'Fabrication',
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "3",
      name: "Leala Dennis",
      specialty: "Coiffeur",
      note: "3.8",
      location: "Chambéry",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"l.dennos@hotmail.fr",
      website:"https://coiffure-leala-chambery.fr",
      category:"Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "4",
      name: "Chocolaterie Labbé",
      specialty: "Chocolatier",
      note: "4.9",
      location: "Grenoble",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"chocolaterie-labbe@gmail.com",
      website:"https://chocolaterie-labbe.fr",
      category:"Alimentation",
      top: true,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "5",
      name: "Claude Quinn",
      specialty: "Bijoutier",
      note: "4.2",
      location: "Aix-les-bains",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"claude.quinn@gmail.com",
      website:"",
      category:"Fabrication",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "6",
      name: "Valérie Laderoute",
      specialty: "Toiletteur",
      note: "4.5",
      location: "Valence",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"v-laredoute@gmail.com",
      website:"",
      category:"Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "7",
      name: "Boutot & fils",
      specialty: "Menuisier",
      note: "4.7",
      location: "Bourg-en-bresse",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"boutot-menuiserie@gmail.com",
      website:"https://boutot-menuiserie.com",
      category:"Bâtiment",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "8",
      name: "CM Graphisme",
      specialty: "Webdesign",
      note: "4.4",
      location: "Valence",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"contact@cm-graphisme.com",
      website:"https://cm-graphisme.com",
      category:"Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "9",
      name: "Orville Salmons",
      specialty: "Chauffagiste",
      note: "5",
      location: "Evian",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"o-salmons@live.com",
      website:"",
      category:"Bâtiment",
      top: true,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "10",
      name: "Au pain chaud",
      specialty: "Boulanger",
      note: "4.8",
      location: "Montélimar",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"aupainchaud@hotmail.com",
      website:"",
      category:"Alimentation",
      top: true,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "11",
      name: "Boucherie Dumont",
      specialty: "Boucher",
      note: "4.5",
      location: "Lyon",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"boucherie.dumond@gmail.com",
      website:"",
      category:"Alimentation",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "12",
      name: "Mont Blanc Eléctricité",
      specialty: "Electricien",
      note: "4.5",
      location: "Chamonix",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"contact@mont-blanc-electricite.com",
      website:"https://mont-blanc-electricite.com",
      category:"Bâtiment",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "13",
      name: "Traiteur Truchon",
      specialty: "Traiteur",
      note: "4.1",
      location: "Privas",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"contact@truchon-traiteur.fr",
      website:"https://truchon-traiteur.fr",
      category:"Bâtiment",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "14",
      name: "Le monde des fleurs",
      specialty: "Fleuriste",
      note: "4.6",
      location: "Annonay",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"contact@le-monde-des-fleurs-annonay.fr",
      website:"https://le-monde-des-fleurs-annonay.fr",
      category:"Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "15",
      name: "Royden Charbonneau",
      specialty: "Carrossier",
      note: "3.8",
      location: "Saint-Priest",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email:"r.charbonneau@gmail.com",
      website:"",
      category:"Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "16",
      name: "Ernest Carignan",
      specialty: "Ferronnier",
      note: "5",
      location: "Le Puy-en-Velay",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: "e-carigan@hotmail.com",
      website: "",
      category: "Fabrication",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    },
    {
      id: "17",
      name: "C'est sup'hair",
      specialty: "Coiffeur",
      note: "4.1",
      location: "Romans-sur-Isère",
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: "sup-hair@gmail.com",
      website: "https://sup-hair.fr",
      category: "Services",
      top: false,
      photo: 'assets/images/seamstress.jpg'
    }
  ];

  private currentArtisanId: string | null = null;

  constructor() {}

  getArtisansByCategory(category: string): Artisan[] {
    return this.artisans.filter(artisan => artisan.category === category);
  }

  getArtisanById(id: string): Artisan | undefined {
    return this.artisans.find(artisan => artisan.id === id);
  }

  getArtisans(): Artisan[] {
    return this.artisans;
  }

  getTopArtisans(): Artisan[] {
    return this.artisans
      .sort((a, b) => parseFloat(b.note) - parseFloat(a.note)) // Convertir la note en nombre pour trier
      .slice(0, 3); // Limiter le nombre d'artisans retournés aux 3 meilleurs
  }

  setCurrentArtisanId(id: string) {
    this.currentArtisanId = id;
  }

  getCurrentArtisan(): Artisan | undefined {
    if (this.currentArtisanId) {
      return this.getArtisanById(this.currentArtisanId);
    }
    return undefined;
  }
}