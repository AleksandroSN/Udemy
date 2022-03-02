import Geocoding, { GeocodeResponse, GeocodeService } from "@mapbox/mapbox-sdk/services/geocoding";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MapboxService {
  private geocoder: GeocodeService;

  constructor(private readonly configService: ConfigService) {
    const mapboxToken = this.configService.get<string>("MAPBOX_TOKEN");
    this.geocoder = Geocoding({ accessToken: mapboxToken });
  }

  async forward(location: string) {
    const geoData = await this.geocoder
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();
    const geoDataBody = geoData.body as GeocodeResponse;
    const geoDataGeometry = geoDataBody.features[0].geometry;
    return geoDataGeometry;
  }
}
