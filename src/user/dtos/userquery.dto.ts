import { ApiProperty } from '@nestjs/swagger';

export class UserQueryDTO {
  @ApiProperty({
    description: 'Username (left empty string for non search query)',
  })
  userName: string;

  @ApiProperty({
    maximum: 100,
  })
  skip: number;
  @ApiProperty({
    maximum: 100,
  })
  take: number;
}
