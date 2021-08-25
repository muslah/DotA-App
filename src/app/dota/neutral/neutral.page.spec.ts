import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeutralPage } from './neutral.page';

describe('NeutralPage', () => {
  let component: NeutralPage;
  let fixture: ComponentFixture<NeutralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeutralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeutralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
