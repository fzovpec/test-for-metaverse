import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { getScores, updateScores } from '../services/ether';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':username/:gameId')
  async getScores(@Param('username') username: string, @Param('gameId') gameId: number) {
      return await getScores(username, gameId);
  }

  @Post()
  async setScores(@Body() body: any){
      updateScores(body.username, body.gameId, body.wins, body.losses);
  }
}
