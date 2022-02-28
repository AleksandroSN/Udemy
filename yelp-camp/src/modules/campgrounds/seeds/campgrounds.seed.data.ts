import { CampgroundImagesDTO } from "@shared";
import { CreateCampgroundDto } from "../dto/create-campground.dto";

class SeedDataModel extends CreateCampgroundDto {
  images: CampgroundImagesDTO[];

  reviews: string[];

  author: string;
}

export const seedData: SeedDataModel[] = [
  {
    title: "First",
    images: [
      {
        path: "https://source.unsplash.com/collection/484351",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "0",
    description: "My First bootcamp",
    location: "Los Angeles",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
  },
  {
    title: "Second",
    images: [
      {
        path: "https://source.unsplash.com/collection/484351",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "1000",
    description: "My Second bootcamp",
    location: "Ilinois",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
  },
  {
    title: "Third",
    images: [
      {
        path: "https://source.unsplash.com/collection/484351",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "2000",
    description: "My Third bootcamp",
    location: "New York",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
  },
  {
    title: "Fourth",
    images: [
      {
        path: "https://source.unsplash.com/collection/484351",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "3000",
    description: "My Fourth bootcamp",
    location: "Paris",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
  },
  {
    title: "Fifth",
    images: [
      {
        path: "https://source.unsplash.com/collection/484351",
        url: "https://source.unsplash.com/collection/484351",
      },
    ],
    price: "4000",
    description: "My Fifth bootcamp",
    location: "Pekin",
    reviews: [],
    author: "6213ae657a735e659a71eb1a",
  },
];
