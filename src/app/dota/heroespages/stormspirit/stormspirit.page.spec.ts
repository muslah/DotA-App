import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StormspiritPage } from './stormspirit.page';

describe('StormspiritPage', () => {
  let component: StormspiritPage;
  let fixture: ComponentFixture<StormspiritPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormspiritPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StormspiritPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
