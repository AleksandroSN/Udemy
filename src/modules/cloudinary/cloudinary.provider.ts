/* eslint-disable arrow-body-style */
import { FactoryProvider } from "@nestjs/common";
import { CLOUDINARY } from "@shared";
import { v2, ConfigOptions } from "cloudinary";

export const CloudinaryProvider: FactoryProvider<ConfigOptions> = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: process.env.CLOUDINARY_NAME || "",
      api_key: process.env.CLOUDINARY_API || "",
      api_secret: process.env.CLOUDINARY_SECRET || "",
    });
  },
};
