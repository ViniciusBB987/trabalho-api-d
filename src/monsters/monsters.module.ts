import { Module } from '@nestjs/common';
import { MonstersController } from './monsters.controller';
import { MonstersService } from './monsters.service';
import { DDModule } from 'src/config/dd.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Monster, MonsterSchema } from './schemas/monster.schema';

@Module({
  imports: [
    DDModule,
    MongooseModule.forFeature([{ name: Monster.name, schema: MonsterSchema}])
  ],
  controllers: [MonstersController],
  providers: [MonstersService]
})
export class MonstersModule {}
