import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NodeEditorComponent} from './node-editor.component';
import {ReteComponent} from '../../rete/rete.component';

describe('NodeEditorComponent', () => {
  let component: NodeEditorComponent;
  let fixture: ComponentFixture<NodeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NodeEditorComponent,
        ReteComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
