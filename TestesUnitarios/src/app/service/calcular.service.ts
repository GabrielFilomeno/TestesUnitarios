import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor() { }

  somar(num1: number, num2: number){
    return num1 + num2;
  }

  subtrair(num1: number, num2: number){
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number){
    return num1 * num2;
  }

  dividir(num1: number, num2: number){
    if(num2 === 0){
      throw new Error('Não é permitida a divisão por zero');
    }

    return num1 / num2;
  }
}
