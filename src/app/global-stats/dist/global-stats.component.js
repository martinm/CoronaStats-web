"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlobalStatsComponent = void 0;
var core_1 = require("@angular/core");
var GlobalStatsComponent = /** @class */ (function () {
    function GlobalStatsComponent(globalService, searchService) {
        this.globalService = globalService;
        this.searchService = searchService;
    }
    GlobalStatsComponent.prototype.ngOnInit = function () {
        this.getStats();
        this.search();
    };
    GlobalStatsComponent.prototype.getStats = function () {
        var _this = this;
        this.globalService.getStats().subscribe(function (stats) { return _this.globalStats = stats; });
    };
    GlobalStatsComponent.prototype.search = function () {
        var _this = this;
        this.searchService.searchResults.subscribe(function (stats) { return _this.searchResults = stats; });
    };
    GlobalStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-global-stats',
            templateUrl: './global-stats.component.html',
            styleUrls: ['./global-stats.component.scss']
        })
    ], GlobalStatsComponent);
    return GlobalStatsComponent;
}());
exports.GlobalStatsComponent = GlobalStatsComponent;
