import { Module } from '@nestjs/common';
import { EventsModule } from './src/events/events.module';
import { SpotsModule } from './src/spots/spots.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner1' }),
    EventsModule,
    SpotsModule,
  ],
})
export class Partiner1Module {}
