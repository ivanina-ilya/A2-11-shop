### Store Demo
## Task3

* implemented behavior for `CartService`
* implemented `ConfigOptionsService` with reading data from json file
* implemented `demo-component` and `demo-module` with behavior:
  * `ConstantsService`  with using `useValue`
  * `GeneratorService` with using `GeneratorService`
  * `ConfigOptionsService`
* implemented `deo-directive` with alias `fontSizeIncrease`
* `local-storeg` implemented as part of `store-service` in core. With getting, setting elements, and getting count and etc.

#### Question:
* Cannot implemented `ConstantsService` in demo-module and export to component.
doe to error with `const ConstantsService`

So, this cod is not work

In module:


```javascript
  //.....
  export const ConstantsService = new InjectionToken<any>('ConstantsService');
  //.....  
  providers:[
    {provide: ConstantsService, useValue: {App: "TaskManager", Ver: "1.0"}},
  ]
  
  //...
```

In component:
```javascript
import { ConstantsService} from "./demo.module";
//.....
providers:[
   {provide: ConstantsService, useValue: {App: "TaskManager", Ver: "1.0"}},
 ]
//...

constructor(@Optional() @Inject(ConstantsService) private constantsService: any)
//...
```

So, I implemented this service in component directly.
