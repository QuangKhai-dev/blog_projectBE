import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserDto): Observable<UserDto> {
    return from(this.userRepository.save(user));
  }

  findOne(id: number): Observable<UserDto> {
    console.log(id);
    return from(
      this.userRepository.findOne({
        where: {
          id,
        },
      }),
    );
  }

  findAll(): Observable<UserDto[]> {
    return from(this.userRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  updateOne(id: number, user: Partial<UserDto>): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
}
