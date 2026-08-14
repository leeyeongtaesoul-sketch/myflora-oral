import { Controller, Get } from '@nestjs/common';

@Controller('clinic')
export class ClinicController {
  @Get('hello')
  hello() {
    return { message: 'MyFlora Oral Clinic API is running!' };
  }
}