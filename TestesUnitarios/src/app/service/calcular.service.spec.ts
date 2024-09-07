import { TestBed } from '@angular/core/testing';

import { CalcularService } from './calcular.service';

describe('CalcularService', () => {
  let service: CalcularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve verificar se a função somar esta retornando o valor correto', () => {
    const resultado = service.somar(5, 5);
    expect(resultado).toEqual(10);
  });

  it('deve verificar se a função subtrair esta retornando o valor correto', () => {
    const resultado = service.subtrair(10, 5);
    expect(resultado).toEqual(5);
  });

  it('deve verificar se a função multiplicação esta retornando o valor correto', () => {
    const resultado = service.multiplicar(2, 5);
    expect(resultado).toEqual(10);
  });

  it('deve verificar se a função dividir esta retornando o valor correto', () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toEqual(5);
  });

  it('deve verificar se a função dividir esta retornando um erro quando o num 2 for 0', () => {
    expect(() => service.dividir(10,0)).toThrow();
  });
});
