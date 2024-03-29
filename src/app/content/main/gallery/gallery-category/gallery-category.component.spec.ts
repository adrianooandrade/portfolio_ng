import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryCategoryComponent } from './gallery-category.component';

describe('PortfolioComponent', () => {
  let component: GalleryCategoryComponent;
  let fixture: ComponentFixture<GalleryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryCategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
