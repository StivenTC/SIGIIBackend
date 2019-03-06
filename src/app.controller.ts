import { Controller, Get, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("postes")
  async getHello() {
    return await this.appService.getHello();
  }

  @Put("postes")
  async putPostes(@Body() params) {
    console.log(params);

    return await this.appService.putPostes();
  }
}
