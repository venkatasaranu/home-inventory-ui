import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { HomeInventory } from "src/app/interfaces/HomeInventory";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HomeInventoryService } from 'src/app/services/home-inventory-service';

@Component({
    selector: 'home-inventory-data',
    templateUrl: './home-inventory-data.html',
    styleUrls: ['./home-inventory-data.css']
  })
  export class HomeInventoryDataComponent  implements AfterViewInit,OnInit {
  homes : HomeInventory[] |  undefined;
  displayedColumns: string[] = ['ID', 'Sale Manager', 'Community', 'City','County','School ISD','Address','Stories','Baths','Bed','Garages #','Direction','Home Size','Lot Size','MLS ID','Status','Available','HOA Fee'];
  dataSource: MatTableDataSource<HomeInventory>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private homeInventoryService: HomeInventoryService) {
    // Create 100 users
     

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.homes);
  }
  private getHomesList() {
    this.homeInventoryService.getHomeInventoryList().subscribe(data => {
      this.homes = data;
    });
  }
  ngOnInit(): void {
    this.getHomesList();
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