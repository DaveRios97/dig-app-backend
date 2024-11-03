import { Test, TestingModule } from '@nestjs/testing';
import { CoworkingsService } from './coworking.service';

describe('CoworkingsService', () => {
  let service: CoworkingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoworkingsService],
    }).compile();

    service = module.get<CoworkingsService>(CoworkingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
