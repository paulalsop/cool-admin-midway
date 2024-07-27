
//   import { User } from '../../mgEntity/user';
  import { Body,  Fields, Files,Inject, Post } from '@midwayjs/core';
  import { TestService } from '../../service/testmg';
  import { Controller, Get } from '@midwayjs/decorator';
  


  @Controller('/')
  export class TestmgController{
    @Inject()
    pluginService: TestService;
  
    @Get('/getTest', { summary: '插入数据' })
    async getTest() {
      
        await this.pluginService.getTest();
    }
  }
  