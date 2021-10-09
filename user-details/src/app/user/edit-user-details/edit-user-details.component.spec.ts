import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDetailsComponent } from './edit-user-details.component';

describe('EditUserDetailsComponent', () => {
  let component: EditUserDetailsComponent;
  let fixture: ComponentFixture<EditUserDetailsComponent>;
 
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ EditUserDetailsComponent ]
  //   })
  //   .compileComponents();});
  
  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

    it('#clicked() should toggle #isOn', () => {
      const comp = new EditUserDetailsComponent();
      expect(comp.isOn).toBe(false, 'off at first');
      comp.clicked();
      expect(comp.isOn).toBe(true, 'on after click');
      comp.clicked();
      expect(comp.isOn).toBe(false, 'off after second click');
    } );
    it('should create', () => {
    expect(component).toBeTruthy();
  });
});
