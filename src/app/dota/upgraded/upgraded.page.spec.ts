import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpgradedPage } from './upgraded.page';

describe('UpgradedPage', () => {
  let component: UpgradedPage;
  let fixture: ComponentFixture<UpgradedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpgradedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
