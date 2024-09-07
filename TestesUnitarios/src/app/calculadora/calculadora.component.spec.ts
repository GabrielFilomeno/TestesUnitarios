import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se a função somar está atualizando o resultado', ()=> {
    const spy = spyOn(component, 'somar').and.callThrough();

    const button = fixture.nativeElement.querySelector("#somar");
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(component.resultado).toBeDefined;
  });

  it('deve verificar se a função subtrair está atualizando o resultado', ()=> {
    const spy = spyOn(component, 'subtrair').and.callThrough();

    const button = fixture.nativeElement.querySelector("#subtrair");
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(component.resultado).toBeDefined;
  });

  it('deve verificar se a função multiplicar está atualizando o resultado', ()=> {
    const spy = spyOn(component, 'multiplicar').and.callThrough();

    const button = fixture.nativeElement.querySelector("#multiplicar");
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(component.resultado).toBeDefined;
  });

  it('deve verificar se a função dividir está atualizando o resultado', ()=> {
    const spy = spyOn(component, 'dividir').and.callThrough();
    const button = fixture.nativeElement.querySelector("#dividir");
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(component.resultado).toBeDefined;
  });

  it('deve verificar se o ngModel esta recebendo a entrada do usuário corretamente', () => {
    const inputNum1 = fixture.nativeElement.querySelector("#num1");
    const inputNum2 = fixture.nativeElement.querySelector("#num2");

    inputNum1.value = 5;
    inputNum1.dispatchEvent(new Event('input'));
    inputNum2.value = 2;
    inputNum2.dispatchEvent(new Event('input'));

    fixture.detectChanges()

    expect(component.num1).toEqual(5);
    expect(component.num2).toEqual(2);
  })
});
