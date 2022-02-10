import { Test, TestingModule } from "@nestjs/testing";
import { CampgroundsController } from "./campgrounds.controller";
import { CampgroundsService } from "./campgrounds.service";

describe("CampgroundsController", () => {
  let controller: CampgroundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampgroundsController],
      providers: [CampgroundsService],
    }).compile();

    controller = module.get<CampgroundsController>(CampgroundsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
