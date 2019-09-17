import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';
import {NewPopUpDirective} from '../shared/new-pop-up.directive';
import {NewTweetComponent} from '../new-tweet/new-tweet.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(NewPopUpDirective, {static: false}) newTweetPopup: NewPopUpDirective;

  constructor(private componentFactory: ComponentFactoryResolver, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  newPost() {
    const compFactory = this.componentFactory.resolveComponentFactory(NewTweetComponent);
    const hostViewContainerRef = this.newTweetPopup.viewContainerRef;
    hostViewContainerRef.clear();

    const comRef = hostViewContainerRef.createComponent(compFactory);
    comRef.instance.exit.subscribe(() => {
      comRef.destroy();
    });
  }

}
