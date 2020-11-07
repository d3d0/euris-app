import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { AddProdComponent } from './add-prod.component';

describe('AddProdComponent', () => {
  let component: AddProdComponent;
  let fixture: ComponentFixture<AddProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdComponent ],
      providers: [ MatDialogRef],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDialogRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
