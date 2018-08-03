# AppBeta

Depois de descompactar os arquivos, acesse o diretório da aplicação (/appBeta) através de uma instancia do Prompt de comando e de o comando ng serve, se tiver sucesso ele vai gerar um url como esse: open your browser on http://localhost:4200, para consumir dados dinâmicos também criei uma API fake com json-server (é preciso ter o ele instalado na maquina), para que a tabela seja gerada com sucesso átravés do Prompt acesse o diretorio da aplicação (/appBeta) e de o comando: dir em seguida de o comando: json-server --watch banco-de-dados.json (importante que seja banco-de-dados.json, pois existe outro arquivo parecido banco_de_dados) em caso de sucesso ele irá gerar os url´s: 
  
Resources
  http://localhost:3000/registros
  http://localhost:3000/pedidos
  Home
  http://localhost:3000

É possível fazer os testar com as url´s fornecidas por você Diego, basta subsistir 
${URL_API}
no módulo novo-registro.service.ts (a partir da linha 21 tem um comentário explicando)   
por: ${URL_API2}
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## how to use

In the list registration page a table is being populated by dynamic data from a fake API made by json-server:
  http: // localhost: 3000 / records
  http: // localhost: 3000 / requests
  home: http: // locahost: 3000

click the register button to register a new product, you will be sent to the registration page, where you must fill in the fields, after the validated fields click on the "register", you will be sent to the confirmation page if you find success, to return to the initial screen click list register in the left menu. 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies:

    @angular/animations: "^6.1.0",
    @angular/common: "^6.1.0",
    @angular/compiler: "^6.1.0",
    @angular/core: "^6.1.0",
    @angular/forms: "^6.1.0",
    @angular/http: "^6.1.0",
    @angular/platform-browser: "^6.1.0",
    @angular/platform-browser-dynamic: "^6.1.0",
    @angular/router: "^6.1.0",
    bootstrap: "^4.1.3",
    core-js: "^2.5.4",
    jquery: "^3.3.1",
    rxjs: "^6.0.0",
    tether: "^1.4.4",
    zone.js: "~0.8.26"

## DevDependencies: 

    @angular-devkit/build-angular: "~0.7.0",
    @angular/cli: "~6.1.1",
    @angular/compiler-cli: "^6.1.0",
    @angular/language-service: "^6.1.0",
    @types/jasmine: "~2.8.6",
    @types/jasminewd2: "~2.0.3",
    @types/node: "~8.9.4",
    codelyzer: "~4.2.1",
    jasmine-core: "~2.99.1",
    jasmine-spec-reporter: "~4.2.1",
    karma: "~1.7.1",
    karma-chrome-launcher: "~2.2.0",
    karma-coverage-istanbul-reporter: "~2.0.0",
    karma-jasmine: "~1.1.1",
    karma-jasmine-html-reporter: "^0.2.2",
    protractor: "~5.3.0",
    ts-node: "~5.0.1",
    tslint: "~5.9.1",
    typescript: "~2.7.2"

 
