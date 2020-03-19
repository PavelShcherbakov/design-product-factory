import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/loyouts/header/header.component';
import { FooterComponent } from './components/loyouts/footer/footer.component';
import { TextHeaderComponent } from './components/text-header/text-header.component';




const Components = [
  HeaderComponent,
  FooterComponent,
  TextHeaderComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ]
})
export class SharedModule { }
