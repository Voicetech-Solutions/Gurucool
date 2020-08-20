import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaycollectionPage } from './daycollection.page';

describe('DaycollectionPage', () => {
  let component: DaycollectionPage;
  let fixture: ComponentFixture<DaycollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaycollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaycollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
