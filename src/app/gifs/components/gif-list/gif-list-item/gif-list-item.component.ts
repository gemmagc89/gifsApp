import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>()

  //'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg';
}
