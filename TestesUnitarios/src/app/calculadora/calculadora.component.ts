import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcularService } from '../service/calcular.service';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  calcularService = inject(CalcularService);

  num1 = 0;
  num2 = 0;
  resultado: number | undefined;

  somar() {
    this.resultado = this.calcularService.somar(this.num1, this.num2)
  };

  subtrair() {
    this.resultado = this.calcularService.subtrair(this.num1, this.num2)
  };

  multiplicar() {
    this.resultado = this.calcularService.multiplicar(this.num1, this.num2)
  };

  dividir() {
    this.resultado = this.calcularService.dividir(this.num1, this.num2)
  };
}
