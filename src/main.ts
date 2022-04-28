import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })

    app.useGlobalPipes(new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true,
        transform: true
    }))

    app.useGlobalInterceptors()

    await app.listen(3000)
}
bootstrap()
