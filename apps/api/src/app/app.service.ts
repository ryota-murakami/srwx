import { Injectable } from '@nestjs/common';
import { getAllGames, getGame } from './db'

@Injectable()
export class AppService {
  getAllGames() {
    return getAllGames();
  }
  getGame(id) {
    return getGame(id);
  }
}
