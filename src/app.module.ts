import { HttpModule, Module } from '@nestjs/common'
import { CarsController } from './gateways/controllers/cars.controller'
import { HomeController } from './gateways/controllers/home'
import { HomePresenter } from './gateways/presenters/home'
import { GetCarBrands } from './usecases/get.car.brands'
import { Render } from './frameworks/render'
import { FipeGatewayHttp } from './gateways/http/fipe.gateway.http'

@Module({
  imports: [HttpModule],
  controllers: [
    HomeController,
    CarsController
  ],
  providers: [
    { provide: 'FipeGateway', useClass: FipeGatewayHttp },
    Render,
    HomePresenter,
    GetCarBrands,
  ],
})
export class AppModule {}
