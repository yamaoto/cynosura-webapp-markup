import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEditorComponent } from './role-editor.component';

describe('OverviewComponent', () => {
  let component: RoleEditorComponent;
  let fixture: ComponentFixture<RoleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
