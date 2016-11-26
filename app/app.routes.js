"use strict";
var router_1 = require('@angular/router');
var date_night_list_component_1 = require('./date-night-list/date-night-list.component');
var date_night_detail_component_1 = require('./date-night-detail/date-night-detail.component');
var date_night_map_component_1 = require('./date-night-map/date-night-map.component');
var date_night_about_component_1 = require('./about/date-night-about.component');
var routes = [
    {
        path: 'list',
        component: date_night_list_component_1.DateNightListComponent
    },
    {
        path: 'map',
        component: date_night_map_component_1.DateNightMapComponent
    },
    {
        path: 'about',
        component: date_night_about_component_1.DateNightAboutComponent
    },
    {
        path: 'date/:slug',
        component: date_night_detail_component_1.DateNightDetailComponent
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/about'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: false });
//# sourceMappingURL=app.routes.js.map