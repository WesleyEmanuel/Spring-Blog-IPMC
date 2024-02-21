import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardsLoadingComponent } from './skeleton-cards-loading.component';

describe('SkeletonCardsLoadingComponent', () => {
  let component: SkeletonCardsLoadingComponent;
  let fixture: ComponentFixture<SkeletonCardsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonCardsLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonCardsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
