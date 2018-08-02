import { Component, OnInit } from '@angular/core';
import { NovoRegistroService } from '../novo-registro.servide'
import { Pedido } from '../shared/pedido.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ NovoRegistroService ]
})
export class FormularioComponent implements OnInit {

  //public idPedidoCompra: number

  // Pedido
  public pedido: Pedido = new Pedido('', '', '')

  public name: string = ""
  public price: string = ""
  public sku: string = ""

  // controles de validação dos campos
  public nameValido: boolean
  public priceValido: boolean
  public skuValido: boolean

  // estados primitivos dos campos (pristine)
  public nameEstadoPrimitivo: boolean = true
  public priceEstadoPrimitivo: boolean = true
  public skuEstadoPrimitivo: boolean = true

  // controlar botão register
  public formEstado: boolean = true


  constructor(private novoRegistroServide: NovoRegistroService) { }

  ngOnInit() {
    //this.novoRegistroServide.novoRegistro()
  }

  public atualizaName(name: string): void {
    this.name = name
    this.nameEstadoPrimitivo = false

    //console.log(this.name)
    if (this.name.length > 1) {
      this.nameValido = true
    } else {
      this.nameValido = false
    }
      //this.habilitaForm()
  }
  public atualizaPrice(price: string): void {
    this.price = price
    this.priceEstadoPrimitivo = false

    if (this.price.length > 0) {
      this.priceValido = true
    } else {
      this.priceValido = false
    }
      //this.habilitaForm()
  }
  public atualizaSku(sku: string): void {
    this.sku = sku
    this.skuEstadoPrimitivo = false

    if (this.sku.length > 3) {
      this.skuValido = true
    } else {
      this.skuValido = false
    }
      //this.habilitaForm()
  }

  public confirmarRegistro(): void {
    
    this.pedido.name = this.name
    this.pedido.price = this.price
    this.pedido.sku = this.sku
    this.novoRegistroServide.novoRegistro(this.pedido)
    .subscribe()
  }

  /*public habilitaForm(): void {
    if (this.nameValido === true && this.priceValido === true && this.skuValido === true) {
      this.formEstado = true
    } else {
      this.formEstado = false
    }
  }*/

}
