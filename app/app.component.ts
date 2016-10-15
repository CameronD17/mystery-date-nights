import { Component } from '@angular/core';

@Component({
    selector: 'mdn-app',
    template: `
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand" routerLink="/list" routerLinkActive="active">{{ pageTitle }}</a>
                <ul class="nav navbar-nav">
                    <li><a routerLink="/map" routerLinkActive="active">View on Map</a></li>
                </ul>
            </div>
        </nav>
        <div>
            <router-outlet></router-outlet>
        </div>
    </div>`
})

export class AppComponent {
    pageTitle: string = 'Mystery Date Nights';
}