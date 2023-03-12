import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomeInventory } from "src/app/interfaces/HomeInventory";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HomeInventoryService } from 'src/app/services/home-inventory-service';

@Component({
  selector: 'home-inventory-data',
  templateUrl: './home-inventory-data.html',
  styleUrls: ['./home-inventory-data.css']
})
export class HomeInventoryDataComponent implements AfterViewInit {
  homes: HomeInventory[] | undefined;
  displayedColumns: string[] = ['inventoryId',
    'saleManager',
    'community',
    'city',
    'county',
    'schoolISD',
    'address',
    'stories',
    'baths',
    'rooms',
    'garageSize',
    'direction',
    'houseSize',
    'lotSize',
    'listPrice',
    'mlsListingId',
    'status',
    'available',
    'hoaFee'];

  dataSource: MatTableDataSource<HomeInventory> | any = MatTableDataSource;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(private homeInventoryService: HomeInventoryService) {
    // Create 100 users

    this.getHomesList();

    // Assign the data to the data source for the table to render

  }
  private getHomesList() {
    this.homeInventoryService.getHomeInventoryList().subscribe(data => {
      this.homes = data;
      this.dataSource = new MatTableDataSource(this.homes);
    });
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}