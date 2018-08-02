import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { Pedido } from './shared/pedido.model'
import { Observable } from '../../node_modules/rxjs';
import { URL_API } from './app.api'
import { URL_API2 } from './app.api'

@Injectable()
export class NovoRegistroService {
    
    constructor(private http: Http) {}
    
    public novoRegistro(pedido: Pedido): Observable<any> {

        let headers: Headers = new Headers()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            
/* para testar o POST para a url: http://angular-test.blabs.us. 
substituir abaixo o conteúdo de ${URL_API} por ${URL_API2}, 
neste momento estou fazendo um POST para o banco-de-dados.json de uma api criada com o json-server*/
           
    `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        )

    
        //.map((resposta: Response) => console.log(resposta.json() )
    }
}

