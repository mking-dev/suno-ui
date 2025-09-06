import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suno } from './suno';

describe('Suno', () => {
  let component: Suno;
  let fixture: ComponentFixture<Suno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
