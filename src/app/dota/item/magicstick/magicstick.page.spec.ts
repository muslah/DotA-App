import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicstickPage } from './magicstick.page';

describe('MagicstickPage', () => {
  let component: MagicstickPage;
  let fixture: ComponentFixture<MagicstickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicstickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicstickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
