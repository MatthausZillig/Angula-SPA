import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../registros.service';
import { Registro } from '../shared/registro.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ RegistrosService ]
})
export class HomeComponent implements OnInit {

  public registros: Registro[]
  
  constructor(private registrosService: RegistrosService) { }

  ngOnInit() {
    //this.registros = this.registrosService.getRegistros()
    //console.log(this.registros)

    this.registrosService.getRegistros()
      .then(( registros: Registro[] ) => {
        this.registros = registros
        
      })
      .catch(( param: any ) => {
           console.log(param)
      
      })
}

}
