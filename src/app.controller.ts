import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { getScores, updateScores } from '../services/ether';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':username')
  async getScores(@Param('username') username: string) {
      return await getScores(username);
  }

  @Post()
  async setScores(@Body() body: any){
      await updateScores(body.username, body.wins, body.losses);
  }
}
