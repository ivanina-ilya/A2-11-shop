export class Product {
  constructor(
    public sku: string,
    public title: string,
    public price: number,
    public description?: string
  ) {}
}
