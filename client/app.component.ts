import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export type PeriodicElement = {
    name: string;
    position: number;
    weight: number;
    symbol: string;
};

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-root',
    template: `<h1>Mouse hovering over rows should show highlight effect</h1>
    <table mat-table class="mat-elevation-z8" [dataSource]="dataSource2">
        <!--- Note that these columns can be defined in any order.
              The actual rendered columns are set as a property on the row definition" -->

        <!-- Position Column -->
        <ng-container matColumnDef="position">
            <th *matHeaderCellDef>mat-header-cell No.</th>
            <td *matCellDef="let element" mat-cell>{{ element.position }}</td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
            <th *matHeaderCellDef>mat-header-cell Name</th>
            <td *matCellDef="let element" mat-cell>{{ element.name }}</td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="weight">
            <th *matHeaderCellDef>mat-header-cell Weight</th>
            <td *matCellDef="let element" mat-cell>{{ element.weight }}</td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="symbol">
            <th *matHeaderCellDef>mat-header-cell Symbol</th>
            <td *matCellDef="let element" mat-cell>{{ element.symbol }}</td>
        </ng-container>

        <tr *matHeaderRowDef="displayedColumns" mat-header-row></tr>
        <tr *matRowDef="let row; columns: displayedColumns" mat-row></tr>
    </table> `,
    standalone: true,
    imports: [MatTableModule],
})
export class AppComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource2 = ELEMENT_DATA;
}
