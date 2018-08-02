import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Registro } from './shared/registro.model'



@Injectable()
export class RegistrosService {

    constructor(private http: Http){}

    public getRegistros(): Promise<Registro[]> {
        
        return this.http.get('http://localhost:3000/registros')
        .toPromise()
        .then((resposta: any) => resposta.json())
        
    }

}
    
   

/*public registros: Registro[] = [
        {
            id: 1,
            name: "Notebook Dell Inspiron i14-7460-A10S",
            price: 3429.99,
            sku: "131501024",
            id2: 1,
            name2: "Notebook Dell Inspiron i14-7460-A10S",
            price2: 3429.99,
            sku2: "131501024",
            id3: 1,
            name3: "Notebook Dell Inspiron i14-7460-A10S",
            price3: 3429.99,
            sku3: "131501024",
            id4: 1,
            name4: "Notebook Dell Inspiron i14-7460-A10S",
            price4: 3429.99,
            sku4: "131501024",
        },
            
    ]*/
    
  
   
   
    /* public getRegistros2(): Promise<Registro[]> {
        return new Promise((resolve, reject) => {
            
            let deu_certo = true
            
            if(deu_certo) {
                setTimeout(() => resolve( this.registros ), 3000)
            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'servidor não encontrado'})
            } 
        })
        .then(( registros: Registro[]) => {
            console.log('primeiro then')
            return registros
        })
        .then((registros: Registro[]) => {
            console.log('primeiro then')
            return registros
        })
    }
}
*/