import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeedialogComponent } from './editemployeedialog.component';

describe('EditemployeedialogComponent', () => {
  let component: EditemployeedialogComponent;
  let fixture: ComponentFixture<EditemployeedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditemployeedialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemployeedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
