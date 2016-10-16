"use strict";
var router_1 = require('@angular/router');
var date_night_list_component_1 = require('./date-night-list/date-night-list.component');
var date_night_detail_component_1 = require('./date-night-detail/date-night-detail.component');
var date_night_map_component_1 = require('./date-night-map/date-night-map.component');
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
        path: 'date/:slug',
        component: date_night_detail_component_1.DateNightDetailComponent
    },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map