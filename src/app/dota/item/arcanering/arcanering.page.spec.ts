import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArcaneringPage } from './arcanering.page';

describe('ArcaneringPage', () => {
  let component: ArcaneringPage;
  let fixture: ComponentFixture<ArcaneringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcaneringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcaneringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
