# tronweb-typescript

### Typescript support package for tronweb library ^4.x (and 5.x)

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

1. Import type in package.json as @types/tronweb.

```json
{
  "imports": {
    "@types/tronweb": "./node_modules/@daochild/tronweb-typescript/dist/index.d.ts"
  }
}
```    
2. Add reference type before import tronweb.

```typescript
// <reference types="@types/tronweb" />
import TronWeb from 'tronweb';
```

### Would be nice to do

To put a star ⭐ at the top right of the screen.
