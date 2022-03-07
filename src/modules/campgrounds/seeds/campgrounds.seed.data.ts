import cities from "all-the-cities";
import { CampgroundImagesDTO, CampgroundLocationDTO, descriptors, places } from "@shared";
import { CreateCampgroundDto } from "../dto/create-campground.dto";

class SeedDataModel extends CreateCampgroundDto {
  images: CampgroundImagesDTO[];

  reviews: string[];

  author: string;

  geometry: CampgroundLocationDTO;
}
// eslint-disable-next-line prettier/prettier
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna in magna venenatis eleifend.";
const minPrice = 1000;
const maxPrice = 10000;
const maxPopulation = 500000;

const titleHelper = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];
const quotesReplace = (str: string) => str.replace("'", "");

export const seedData: SeedDataModel[] = cities
  .filter((town) => town.population > maxPopulation)
  .map((city) => {
    const priceHelper = Math.floor(Math.random() * maxPrice) + minPrice;
    return {
      author: "622220460919d6a37c0d6ffb",
      title: `${titleHelper(descriptors)} ${titleHelper(places)}`,
      description,
      price: `${priceHelper}`,
      reviews: [],
      location: `${quotesReplace(city.name)} ${quotesReplace(city.country)}`,
      geometry: {
        type: city.loc.type,
        coordinates: city.loc.coordinates,
      },
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
    };
  });
