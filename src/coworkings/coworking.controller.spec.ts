import { Test, TestingModule } from '@nestjs/testing';
import { CoworkingsController } from './coworking.controller';

describe('CoworkingsController', () => {
  let controller: CoworkingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoworkingsController],
    }).compile();

    controller = module.get<CoworkingsController>(CoworkingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
