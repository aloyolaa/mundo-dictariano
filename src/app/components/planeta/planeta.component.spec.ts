import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaComponent } from './planeta.component';

describe('PlanetaComponent', () => {
  let component: PlanetaComponent;
  let fixture: ComponentFixture<PlanetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetaComponent]
    });
    fixture = TestBed.createComponent(PlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
