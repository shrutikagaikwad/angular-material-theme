import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  defaultTheme,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
  theme9
} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-theme';

  themes = {
    'default-theme': defaultTheme,
    'theme-2-theme': theme2,
    'theme-3-theme': theme3,
    'theme-4-theme': theme4,
    'theme-5-theme': theme5,
    'theme-6-theme': theme6,
    'theme-7-theme': theme7,
    'theme-8-theme': theme8,
    'theme-9-theme': theme9
  };
  currentTheme = 'default-theme';
  @HostBinding('class') componentCssClass;

  //other 
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  color = 'accent';
  mode = 'indeterminate';
  value = 50;

  constructor(public overlayContainer: OverlayContainer) {

  }

  onSetTheme(theme) {
    this.currentTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}
