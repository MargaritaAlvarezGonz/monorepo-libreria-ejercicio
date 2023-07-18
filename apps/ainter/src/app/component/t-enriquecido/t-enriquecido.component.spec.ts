import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TEnriquecidoComponent } from './t-enriquecido.component';

describe('TEnriquecidoComponent', () => {
  let component: TEnriquecidoComponent;
  let fixture: ComponentFixture<TEnriquecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEnriquecidoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TEnriquecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
