import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchDto } from './dtos/search.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query() { query }: SearchDto) {
    return await this.searchService.search(query);
  }
}
