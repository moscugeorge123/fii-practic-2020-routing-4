import { Component } from "@angular/core";

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent {
  public readonly gifs = {
    cat: 'https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/source.gif',
    dog: 'https://media.giphy.com/media/WLbtNNR5TKJBS/source.gif',
    hamster: 'https://media.giphy.com/media/E0KmHELTpq9pK/source.gif',
  }
  public currentGif = this.gifs.cat;
}
