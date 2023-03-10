import { IsNotEmpty, IsString, Length, MinLength, IsOptional } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  public username: string;

  @IsString()
  @Length(8, 20, { message: 'Password has to be between 8 and 20 chars' })
  @IsOptional()
  public password: string;

  @IsOptional()
  public bio: string;

  @IsOptional()
  public profileImage: string;
}