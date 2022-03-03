import { join } from "path";

export const PATH_TO_404_PAGE = join(__dirname, "../../views/pages/404.ejs");
export const PATH_TO_ERROR_PAGE = join(__dirname, "../../views/pages/error.ejs");
export const LOCAL_STRATEGY = "local";
export const LOGIN_PAGE = "/login";
export const CAMPGROUNDS_PAGE = "/campgrounds";
export const REGISTER_PAGE = "/register";
export const CLOUDINARY = "Cloudinary";
export const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "svg", "bmp", "webp"];
export const MAPBOX = "Mapbox";

// HELMET CONTENT SECURE URL
export const SCRIPT_SRC_URLS = [
  "https://stackpath.bootstrapcdn.com",
  "https://api.tiles.mapbox.com",
  "https://api.mapbox.com",
  "https://kit.fontawesome.com",
  "https://cdnjs.cloudflare.com",
  "https://cdn.jsdelivr.net",
];
export const STYLE_SRC_URLS = [
  "https://kit-free.fontawesome.com",
  "https://stackpath.bootstrapcdn.com",
  "https://api.mapbox.com",
  "https://api.tiles.mapbox.com",
  "https://fonts.googleapis.com",
  "https://use.fontawesome.com",
];
export const CONNECT_SRC_URLS = [
  "https://api.mapbox.com",
  "https://*.tiles.mapbox.com",
  "https://events.mapbox.com",
];
