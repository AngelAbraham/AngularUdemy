import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarheroeComponent } from './buscarheroe.component';

describe('BuscarheroeComponent', () => {
  let component: BuscarheroeComponent;
  let fixture: ComponentFixture<BuscarheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
