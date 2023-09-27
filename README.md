# tronweb-typescript

### Typescript support package for tronweb library ^4.x

NOTE:   
Please use official documentation for get actual information about method and their arguments.
https://developers.tron.network/reference/tronweb-object

### Installation

Required: node v14+ LTS

```shell
npm install --save-dev @daochild/tronweb-typescript
```
### Troubleshoots

**error**

missing type, try install type or include *.d.ts

**solution**

```typescript
// import type through reference path 

///<reference path="node_modules/@daochild/tronweb-typescript/dist/index.d.ts"/>
import TronWeb from 'tronweb'

const tronweb: TronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
})
```

### Using

No special requirements. Just import and use.

### Would be nice to do

To put a star ⭐ at the top right of the screen.
