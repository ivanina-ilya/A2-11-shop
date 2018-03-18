import {ProductStore} from './ProductStore';

export class ProductStoreSingleton extends ProductStore {
    private static _instance: ProductStoreSingleton;
    protected constructor() {
        super();
    }

    public static get Instance(): ProductStoreSingleton {
        return this._instance || (this._instance = new this());
    }

    getInStoreCount(sku: string): number {
        return this.inStore[sku];
    }

    isInStore(sku: string): boolean {
        return this.isExistProduct(sku) && this.getInStoreCount(sku) > 0;
    }

    isExistProduct(sku: string): boolean {
        return typeof this.inStore[sku] !== 'undefined';
    }

    push(sku: string, count?: number): number {
        if (typeof count === 'undefined') { count = 1; }
        if (! this.isExistProduct(sku)) { this.inStore[sku] = 0; }
        this.inStore[sku] += count;
        return this.getInStoreCount(sku);
    }

    pop(sku: string, count?: number): number {
        if (typeof count === 'undefined') { count = 1; }
        if (! this.isInStore(sku)) { throw new Error(`The SKU '${sku}' does not exist`); }
        if (this.getInStoreCount(sku) < 1) { throw new Error(`The product with SKU '${sku}' no longer exists`); }
        const available = this.getInStoreCount(sku);
        if (available < count) {
            throw new Error(`Requested ${count} pieces of the product with SKU '${sku}', but there are only ${available} pieces available`);
        }
        this.inStore[sku] -= count;

        return this.getInStoreCount(sku);
    }

}
