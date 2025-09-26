import { Controller, Get, UseGuards, Delete, Param, Req } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  async remove(@Req() req, @Param('id') id: string) {
    return this.userService.remove(req.user, id);
  }
}