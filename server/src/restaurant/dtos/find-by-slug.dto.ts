import { IsNotEmpty } from 'class-validator';

export class FindBySlugDto {
  @IsNotEmpty()
  slug: string;
}
