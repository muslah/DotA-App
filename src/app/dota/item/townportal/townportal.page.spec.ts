import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TownportalPage } from './townportal.page';

describe('TownportalPage', () => {
  let component: TownportalPage;
  let fixture: ComponentFixture<TownportalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownportalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TownportalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
