import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatLabel} from '@angular/material';

  import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MatTableModule
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule, 
    MatFormFieldModule,
    MatIconModule,
    MatTableModule
  ]

})
export class MaterialModule { }
