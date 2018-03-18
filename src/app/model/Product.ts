import {Category} from './Category';

export class Product {
    constructor (
        public sku: string,
        public name: string,
        public description: string,
        public category: Category,
        public price: number
    ) {}
}
