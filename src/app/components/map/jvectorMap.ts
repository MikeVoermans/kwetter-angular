import {Directive, ElementRef, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
// Import Chart.js library
import './../../../../node_modules/jvectormap/jquery-jvectormap.min.js';
import './../../../../node_modules/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js';

declare var jQuery: any;


@Directive({
    selector: 'div[jvectormap]',
})
export class JVectorMapDirective implements OnDestroy, OnChanges, OnInit {


    public map: any;
    // Properties
    @Input() private options: any;
    private element: ElementRef;
    private initFlag: boolean = false;

    public constructor(element: ElementRef) {
        this.element = element;
    }

    // Initialise
    public ngOnInit(): any {
        this.initFlag = true;
        if (this.options) {
            this.build();
        }
    }

    // Change
    public ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag) {
            this.build();
        }
    }

    // Destroy
    public ngOnDestroy(): any {
        if (this.map) {
            this.map.remove();
        }
    }

    // Build
    private build(): any {
        // Clear before rebuild
        this.ngOnDestroy();

        // Check if Flot is available
        if (typeof jQuery(this.element.nativeElement).vectorMap === 'undefined') {
            throw new Error('Configuration issue: Embedding jvectormap lib is mandatory');
        }

        // Let's build chart
        this.map = jQuery(this.element.nativeElement).vectorMap(this.options);
    }

}

@NgModule({
    declarations: [
        JVectorMapDirective
    ],
    exports: [
        JVectorMapDirective
    ],
    imports: []
})
export class JVectorMapModule {
}
