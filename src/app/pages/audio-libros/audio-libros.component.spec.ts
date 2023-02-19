import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioLibrosComponent } from './audio-libros.component';

describe('AudioLibrosComponent', () => {
  let component: AudioLibrosComponent;
  let fixture: ComponentFixture<AudioLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
