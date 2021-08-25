import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbaddonPage } from './abaddon.page';

describe('AbaddonPage', () => {
  let component: AbaddonPage;
  let fixture: ComponentFixture<AbaddonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaddonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbaddonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
