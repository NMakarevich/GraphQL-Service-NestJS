import { Module } from '@nestjs/common';
import { AlbumsService } from './albums/services/albums.service';
import { AlbumsResolver } from './albums/resolvers/albums.resolver';
import { ArtistsService } from './artists/services/artists.service';
import { BandsService } from './bands/services/bands.service';
import { GenresService } from './genres/services/genres.service';
import { TracksService } from './tracks/services/tracks.service';
import { UsersService } from './users/services/users.service';
import { ArtistsResolver } from './artists/resolvers/artists.resolver';
import { BandsResolver } from './bands/resolvers/bands.resolver';
import { GenresResolver } from './genres/resolvers/genres.resolver';
import { TracksResolver } from './tracks/resolvers/tracks.resolver';
import { UsersResolver } from './users/resolvers/users.resolver';
import { HttpModule } from '@nestjs/axios';
import 'dotenv/config';

@Module({
  imports: [HttpModule],
  providers: [
    AlbumsService,
    ArtistsService,
    BandsService,
    GenresService,
    TracksService,
    UsersService,
    AlbumsResolver,
    ArtistsResolver,
    BandsResolver,
    GenresResolver,
    TracksResolver,
    UsersResolver,
  ],
})
export class ModulesModule {}
