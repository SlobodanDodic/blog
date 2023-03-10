import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async editUser(userId: string, dto: UserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...dto }
    });
    delete user.hashedPassword;

    return user;
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUsers(username: string) {
    return await this.prisma.user.findMany({
      where: { username: { contains: username } },
      select: {
        createdAt: true,
        username: true,
        email: true,
        bio: true,
        profileImage: true,
        blogs: true
      }
    });
  }
}
