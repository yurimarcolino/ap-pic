import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FitlerByDescription } from './filter-by-description.pipe';

import { PhotoModule } from '../photo/photo.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { CardMadule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    SearchComponent,
    FitlerByDescription
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardMadule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule {

}
