import { Test, TestingModule } from "@nestjs/testing";
import { CampgroundsService } from "./campgrounds.service";

describe("CampgroundsService", () => {
  let service: CampgroundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampgroundsService],
    }).compile();

    service = module.get<CampgroundsService>(CampgroundsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
