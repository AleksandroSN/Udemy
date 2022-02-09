import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CatDocument, BGGG } from "./schemas/test.schema";

@Injectable()
export class TestService {
  constructor(@InjectModel(BGGG.name) private readonly testModel: Model<CatDocument>) {}

  async create(createCatDto: any): Promise<BGGG> {
    const createdCat = new this.testModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<BGGG[]> {
    return this.testModel.find().exec();
  }
}
