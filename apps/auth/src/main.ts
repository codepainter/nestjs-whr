import { NestFactory, } from '@nestjs/core';

import { AuthModule, } from './auth.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(3001);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
