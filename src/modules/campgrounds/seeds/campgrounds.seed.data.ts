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
    author: "622220460919d6a37c0d6ffb",
    geometry: {
      type: "Point",
      coordinates: [-118.2439, 34.0544],
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
    location: "Adler",
    reviews: [],
    author: "622220460919d6a37c0d6ffb",
    geometry: {
      type: "Point",
      coordinates: [39.983, 43.391],
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
    author: "622220460919d6a37c0d6ffb",
    geometry: {
      type: "Point",
      coordinates: [-73.9866, 40.7306],
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
    author: "622220460919d6a37c0d6ffb",
    geometry: {
      type: "Point",
      coordinates: [2.35183, 48.85658],
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
    location: "Beijing",
    reviews: [],
    author: "622220460919d6a37c0d6ffb",
    geometry: {
      type: "Point",
      coordinates: [116.39139, 39.905],
    },
  },
];
