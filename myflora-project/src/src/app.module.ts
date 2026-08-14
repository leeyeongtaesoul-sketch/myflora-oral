import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ClinicModule } from './modules/clinic/clinic.module';

@Module({
  imports: [AuthModule, ClinicModule],
})
export class AppModule {}
