# Configurações

### Em angular.json
```json title="Campo fileReplacements, para comando de build com --configuration production"
"configurations":
{ 
    "production": {
        "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
            }
        ]
    }
}
``` 

### Em main.ts
```typescript title="Import de arquivo de produção, já alterado devido build com --configuration production"
import { environment } from './environments/environment';
if (environment.production){
    enableProdMode();
}
```

### Em package.json
```terminal title="Section of scripts"
"build": "npm run lint && npm run test && npm run angular-builds"  
"angular-builds": "ng build"  
```
