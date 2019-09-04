import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ListService } from '../../service/list/list-service.service';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from '../../interfaces/movies';
import { SubscriptionLike } from 'rxjs';
import { LoaderService } from '../../service/loader/loader.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, DoCheck, OnDestroy {

  private subscriptions: SubscriptionLike[] = [];
  private paramsId: number;
  private oldParamsId: number;
  public item: IMovies;
  public visible: boolean = true;

  constructor(
    private listItems: ListService,
    private activatedRoute: ActivatedRoute,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.init();
  }
  ngDoCheck(): void {
    this.init();
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscrip => subscrip.unsubscribe());
    }
  }

  private init(): void {
    this.getParamsId();
    this.visible = this.loader.getVisible();
    if (this.paramsId !== this.oldParamsId) {
      this.subscriptions.push(this.getSubscriptionItems());
    }
  }

  private getSubscriptionItems(): SubscriptionLike {
    return this.listItems.getItem(this.paramsId).subscribe(
      (data: IMovies) => {
        this.setDataItem(data);
        window.scrollTo(0, 0);
        this.hidenLoader();
      },
      error => {
        console.log(error);
      }
    );
  }

  private setDataItem(data: IMovies): void {
    this.item = data;
    this.oldParamsId = this.paramsId;
  }

  private hidenLoader(): void {
    setTimeout(() => {
      this.loader.setVisible(false);
    }, 1000);
  }

  private getParamsId(): void {
    this.paramsId = Number.parseInt(this.activatedRoute.snapshot.params.id);
  }
}
