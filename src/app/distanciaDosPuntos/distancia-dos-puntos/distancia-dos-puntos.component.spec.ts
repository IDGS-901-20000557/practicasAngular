import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaDosPuntosComponent } from './distancia-dos-puntos.component';

describe('DistanciaDosPuntosComponent', () => {
  let component: DistanciaDosPuntosComponent;
  let fixture: ComponentFixture<DistanciaDosPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistanciaDosPuntosComponent]
    });
    fixture = TestBed.createComponent(DistanciaDosPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
