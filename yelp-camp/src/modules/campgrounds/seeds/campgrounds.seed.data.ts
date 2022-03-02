import { CampgroundImagesDTO, CampgroundLocationDTO } from "@shared";
import { CreateCampgroundDto } from "../dto/create-campground.dto";

class SeedDataModel extends CreateCampgroundDto {
  images: CampgroundImagesDTO[];

  reviews: string[];

  author: string;

  geometry: CampgroundLocationDTO;
}

export const seedData: SeedDataModel[] = [
  {
    title: "First",
    images: [
      {
        path: "",
        url: "https://res.cloudinary.com/dbpzpws3m/image/upload/v1646038666/sample.jpg",
      },
      {
        path: "",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "0",
    description: "My First bootcamp",
    location: "Los Angeles",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
    geometry: {
      type: "Point",
      coordinates: [34.4322, 55.211],
    },
  },
  {
    title: "Second",
    images: [
      {
        path: "",
        url: "https://res.cloudinary.com/dbpzpws3m/image/upload/v1646038672/samples/sheep.jpg",
      },
      {
        path: "",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "1000",
    description: "My Second bootcamp",
    location: "Ilinois",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
    geometry: {
      type: "Point",
      coordinates: [34.4322, 55.211],
    },
  },
  {
    title: "Third",
    images: [
      {
        path: "",
        url: "https://res.cloudinary.com/dbpzpws3m/image/upload/v1646038673/samples/bike.jpg",
      },
      {
        path: "",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "2000",
    description: "My Third bootcamp",
    location: "New York",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
    geometry: {
      type: "Point",
      coordinates: [34.4322, 55.211],
    },
  },
  {
    title: "Fourth",
    images: [
      {
        path: "",
        url: "https://res.cloudinary.com/dbpzpws3m/image/upload/v1646038671/samples/animals/reindeer.jpg",
      },
      {
        path: "",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "3000",
    description: "My Fourth bootcamp",
    location: "Paris",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
    geometry: {
      type: "Point",
      coordinates: [34.4322, 55.211],
    },
  },
  {
    title: "Fifth",
    images: [
      {
        path: "",
        url: "https://res.cloudinary.com/dbpzpws3m/image/upload/v1646038669/samples/animals/cat.jpg",
      },
      {
        path: "",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "4000",
    description: "My Fifth bootcamp",
    location: "Pekin",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
    geometry: {
      type: "Point",
      coordinates: [34.4322, 55.211],
    },
  },
];
