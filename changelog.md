### Store Demo
## Task3

* Standart Pipes 
    * `currency`
        * app/app.component.html
        * app/cart/cart.component.html
        * app/cart/item/item.component.html
        * app/products/product/product.component.html

    * `json`
        * app/demo/demo.component.html
    
    * `date`
        * app/demo/demo.component.html
    
    * custom Pipe `appOrderBy`
        * iplementation: `OrderByPipe` in app/shared/order-by.pipe.ts
        * used: 
            * in Cart: `app/cart/cart.component.html`
            * in Store: `app/products/products.component.html`


* Receiving product list by Promise implemented in ProductsComponent
    * for receiving pseudo-random error we have to reload page several time (rundom by 3 possible value: 0, 1, 2)

* Method `getProducts` changed to Promise but not on servise - it's done on ProductsComponent.  It will be moved into srvice later.