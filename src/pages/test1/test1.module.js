var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test1Page } from './test1';
var Test1PageModule = /** @class */ (function () {
    function Test1PageModule() {
    }
    Test1PageModule = __decorate([
        NgModule({
            declarations: [
                Test1Page,
            ],
            imports: [
                IonicPageModule.forChild(Test1Page),
            ]
        })
    ], Test1PageModule);
    return Test1PageModule;
}());
export { Test1PageModule };
//# sourceMappingURL=test1.module.js.map