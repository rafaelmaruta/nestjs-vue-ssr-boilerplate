import { Brands } from "../domains/brands";

export interface FipeGateway {
  getBrands(): Promise<Brands>
}