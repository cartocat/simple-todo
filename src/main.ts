import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GlobalExceptionsFilter } from './core/globalexceptionhandler';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Open API
  const config = new DocumentBuilder()
    .setTitle('Simple Todo API')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Exception Handling
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalExceptionsFilter(httpAdapter));

  // Security: Helmet
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
