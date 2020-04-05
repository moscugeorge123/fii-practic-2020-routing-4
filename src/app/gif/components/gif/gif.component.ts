import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit, OnDestroy {
  public readonly gifs = {
    cat: 'https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/source.gif',
    dog: 'https://media.giphy.com/media/WLbtNNR5TKJBS/source.gif',
    hamster: 'https://media.giphy.com/media/E0KmHELTpq9pK/source.gif',
  }
  public currentGif = this.gifs.cat;

  public subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        console.log(params.animal);
        if (params.animal) {
          this.currentGif = this.gifs[params.animal];
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public choose(animal: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {
          animal
        },
        queryParamsHandling: 'merge'
      }
    );
  }
}
