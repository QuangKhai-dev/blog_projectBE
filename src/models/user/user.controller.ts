import { Observable } from 'rxjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: UserDto): Observable<UserDto> {
    return this.userService.create(user);
  }

  @Get('/all')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Observable<UserDto> {
    return this.userService.findOne(Number(param.id));
  }

  @Delete(':id')
  deleteOne(@Param() param): Observable<any> {
    return this.userService.deleteOne(Number(param.id));
  }

  @Put(':id')
  updateOne(@Param() param, @Body() dto: Partial<UserDto>) {
    return this.userService.updateOne(Number(param.id), dto);
  }
}
