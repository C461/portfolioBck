import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';

export class CreateContactDTo {
  @IsString({ message: 'The name must be a text string' })
  @IsNotEmpty({ message: 'The name cannot be empty' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Please, enter a valid email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, { message: 'Message cannot be longer than 255 characters' })
  message: string;
}
