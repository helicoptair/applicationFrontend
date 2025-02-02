import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByIdPipe } from './filter-by-id.pipe';
import { FilterNeighborhoodsPipe } from './filter-neighborhoods';
import { FilterStreetsPipe } from './filter-streets.pipe';
import { CategoriaVooPipe } from './categoriaVoo.pipe';
import { StatusReservaPipe } from './statusReserva.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        FilterByIdPipe,
        FilterNeighborhoodsPipe,
        FilterStreetsPipe,
        CategoriaVooPipe,
        SafePipe,
        StatusReservaPipe
    ],
    exports: [
        FilterByIdPipe,
        FilterNeighborhoodsPipe,
        FilterStreetsPipe,
        CategoriaVooPipe,
        SafePipe,
        StatusReservaPipe
    ]
})
export class PipesModule { }
