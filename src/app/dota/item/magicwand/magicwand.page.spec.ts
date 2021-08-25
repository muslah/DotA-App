import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicwandPage } from './magicwand.page';

describe('MagicwandPage', () => {
  let component: MagicwandPage;
  let fixture: ComponentFixture<MagicwandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicwandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicwandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
