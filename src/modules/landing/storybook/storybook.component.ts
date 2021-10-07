import { Component, OnInit } from '@angular/core';
import { STORY_POINTS } from './storybook.data';
import { StoryInterface } from './storybook.interface';

@Component({
  selector: 'app-storybook',
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.scss'],
})
export class StorybookComponent implements OnInit {
  stories: StoryInterface[] = STORY_POINTS;
  constructor() {}

  ngOnInit(): void {}
}
