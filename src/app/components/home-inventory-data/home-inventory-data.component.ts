import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomeInventory } from "src/app/interfaces/HomeInventory";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HomeInventoryService } from 'src/app/services/home-inventory-service';
import { Router } from '@angular/router';

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
    'hoaFee','edit', 'delete'];

  dataSource: MatTableDataSource<HomeInventory> | any = MatTableDataSource;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(private homeInventoryService: HomeInventoryService, private router: Router) {
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

  updateHome(id : number) {
   this.router.navigate(['/update',{inventoryId: id}])
  }
 
  deleteHome(id : number) {
    this.homeInventoryService.delteHome(id).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToHomes();
      },
      error: (e) => {
        console.log(e);
      }
    });;
  }

  redirectToHomes() {
    this.router.navigate(['/home']);
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