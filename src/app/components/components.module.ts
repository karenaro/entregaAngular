import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import {  FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [CarouselComponent, VideoComponent, EditorComponent, MapComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    CKEditorModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSPSpkFznGgzzBSsYvTq_sj0T0QCHRgwM'
    })
    
  ]
})
export class ComponentsModule { }
