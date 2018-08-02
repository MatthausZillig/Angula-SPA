import { Registro } from './shared/registro.model'
import { Injectable } from '@angular/core' 
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs';    


@Injectable()
export class RegistrosService {
    
    constructor(private http: Http){}

    
    public getRegistros(): Promise<Registro[]> {
        return this.http.get('http://angular-test.blabs.us')
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

}