import { Component, OnInit } from '@angular/core';

const THEMES = [
  'deeppurple-amber',
  'indigo-pink',
  'pink-bluegrey',
  'purple-green'
];

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {
  public themes: Array<string> = THEMES;
  public selectedTheme: string = this.themes[3];

  constructor() { }

  ngOnInit() {
  }

  onRadioChange(theme: string) {
    this.selectedTheme = theme;
    this.changeTheme(theme);
  }

  changeTheme(themeName: string) {
    (document.getElementById('themeAsset') as HTMLLinkElement).href = `/assets/themes/${themeName}.css`;
  }
}
