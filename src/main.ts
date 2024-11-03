import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(morgan('dev'));
  app.enableCors(CORS);
  app.setGlobalPrefix('api');
  app.getHttpAdapter().getInstance().disable('x-powered-by');

  const config = new DocumentBuilder()
    .setTitle('DIG API')
    .setDescription('Coworking finder')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();
