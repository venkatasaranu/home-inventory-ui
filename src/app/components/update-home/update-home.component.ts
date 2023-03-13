import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeInventory } from 'src/app/interfaces/HomeInventory';
import { HomeInventoryService } from 'src/app/services/home-inventory-service';

@Component({
  selector: 'update-home',
  templateUrl: './update-home.html',
  styleUrls: ['./update-home.css']
})
export class UpdateHomeComponent implements OnInit {

  formGroup: FormGroup | undefined;
  titleAlert: string = 'This field is required';
  home: HomeInventory = {
    inventoryId: 0,
    saleManager: "",
    community: "",
    city: "",
    county: "",
    schoolISD: "",
    address: "",
    stories: 0,
    baths: 0,
    rooms: 0,
    garageSize: 0,
    direction: "",
    houseSize: 0,
    lotSize: "",
    listPrice: 0,
    mlsListingId: "",
    status: "",
    available: "",
    hoaFee: 0
  };

  constructor(private formBuilder: FormBuilder,private homeInventoryService: HomeInventoryService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const inventoryId = this.route.snapshot.paramMap.get('inventoryId');
    this.createForm(Number(inventoryId));
  //  this.setChangeValidate()
  }

  createForm(inventoryId: number) {
    this.homeInventoryService.getHomeInventoryById(inventoryId).subscribe(data => {
      this.home = data;

    this.formGroup = this.formBuilder.group({
      'inventoryId': [this.home.inventoryId],
      'saleManager': [this.home.saleManager],
      'community': [this.home.community],
      'city': [this.home.city],
      'county': [this.home.county],
      'schoolISD': [this.home.schoolISD],
      'address': [this.home.address],
      'stories': [this.home.stories],
      'baths': [this.home.baths],
      'rooms': [this.home.rooms],
      'garageSize': [this.home.garageSize],
      'direction': [this.home.direction],
      'houseSize': [this.home.houseSize],
      'lotSize': [this.home.lotSize],
      'listPrice': [this.home.listPrice],
       'mlsListingId': [this.home.mlsListingId],
      'status': [this.home.status],
      'available': [this.home.available],
       'hoaFee': [this.home.hoaFee]  
    });
  });
  }

  get inventoryId() {
    return this.formGroup.get('invenotryId') as FormControl
  }
  get saleManager(){
    return this.formGroup.get('saleManager') as FormControl
  }
  get community(){
    return this.formGroup.get('community') as FormControl
  }
  get city(){
    return this.formGroup.get('city') as FormControl
  }
  get county(){
    return this.formGroup.get('county') as FormControl
  }
  get schoolISD(){
    return this.formGroup.get('schoolISD') as FormControl
  }
  get address(){
    return this.formGroup.get('address') as FormControl
  }
  get stories(){
    return this.formGroup.get('stories') as FormControl
  }
  get baths(){
    return this.formGroup.get('baths') as FormControl
  }
  get rooms(){
  return this.formGroup.get('rooms') as FormControl
  }
  get garageSize(){
    return this.formGroup.get('garageSize') as FormControl
  }
  get direction(){
    return this.formGroup.get('direction') as FormControl
  }
  get houseSize(){
    return this.formGroup.get('houseSize') as FormControl
  }
  get lotSize(){
    return this.formGroup.get('lotSize') as FormControl
  }
  get listPrice(){
    return this.formGroup.get('listPrice') as FormControl
  }
  // get mlsListingId(){
  //   return this.formGroup.get('mlsListingId') as FormControl
  // }
  get status(){
    return this.formGroup.get('status') as FormControl
  }
  get available(){
    return this.formGroup.get('available') as FormControl
  }
  // get hoaFee(){
  //   return this.formGroup.get('hoaFee') as FormControl
  // }

  

  updateHome(id: number, home :HomeInventory) {
    this.homeInventoryService.updateHome(id, home).subscribe({
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
}
