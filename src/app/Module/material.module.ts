import { NgModule } from '@angular/core';

import{FormGroup,
    FormBuilder,
    Validators} 
    from '@angular/forms';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatGridListModule
    
 
 
} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        FlexLayoutModule,
        MatSnackBarModule,
        MatDialogModule,
        MatMenuModule,
        MatBadgeModule,
        MatGridListModule
        
        
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        FlexLayoutModule,
        MatSnackBarModule,
        MatDialogModule,
        MatMenuModule,
        MatBadgeModule,
        MatGridListModule
      
        
    ]
})
export class MaterialModule { }