import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    imports:[DarkenOnHoverDirective],
    exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule{}