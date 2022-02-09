import { Module } from "@nestjs/common";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BGGG, TestSchema } from "./schemas/test.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: BGGG.name, schema: TestSchema }])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
