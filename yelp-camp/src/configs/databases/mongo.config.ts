import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const mongoUri = this.configService.get<string>("MONGO_DB_URI");
    return {
      uri: mongoUri,
    };
  }
}
