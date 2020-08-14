import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbsenteesPage } from './absentees.page';

describe('AbsenteesPage', () => {
  let component: AbsenteesPage;
  let fixture: ComponentFixture<AbsenteesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenteesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbsenteesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
