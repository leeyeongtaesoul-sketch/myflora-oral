import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string) {
    if (username === 'nurse_kim' && password === 'nurse123') {
      return {
        accessToken: this.jwtService.sign({ username, role: 'CLINIC_OPERATOR' }),
        message: '로그인 성공',
      };
    }
    throw new UnauthorizedException('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
}