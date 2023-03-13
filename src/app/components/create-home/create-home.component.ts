import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Address } from "src/app/interfaces/address";
import { HomeInventory } from "src/app/interfaces/HomeInventory";
import { HomeInventoryService } from "src/app/services/home-inventory-service";

@Component({
  selector: 'create-home',
  templateUrl: './create-home.html',
  styleUrls: ['./create-home.css']
})
export class CreateHomeComponent {

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

  constructor(private formBuilder: FormBuilder,private homeInventoryService: HomeInventoryService,private router: Router) { }

  ngOnInit() {
    this.createForm();
  //  this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'saleManager': [null, Validators.required],
      'community': [null, Validators.required],
      'city': [null, Validators.required],
      'county': [null, Validators.required],
      'schoolISD': [null, Validators.required],
      'address': [null, Validators.required],
      'stories': [null, Validators.required],
      'baths': [null, Validators.required],
      'rooms': [null, Validators.required],
      'garageSize': [null, Validators.required],
      'direction': [null, Validators.required],
      'houseSize': [null, Validators.required],
      'lotSize': [null, Validators.required],
      'listPrice': [null, Validators.required],
       'mlsListingId': [null],
      'status': [null, Validators.required],
      'available': [null, Validators.required],
       'hoaFee': [null]  
    });
  }

  setChangeValidate() {
    console.log(this.formGroup);
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        this.formGroup.get('saleManager').setValidators(Validators.required);
        this.formGroup.get('community').setValidators(Validators.required);
        this.formGroup.get('city').setValidators(Validators.required);
        this.formGroup.get('county').setValidators(Validators.required);
        this.formGroup.get('schoolISD').setValidators(Validators.required);
        this.formGroup.get('address').setValidators(Validators.required);
        this.formGroup.get('stories').setValidators(Validators.required);
        this.formGroup.get('baths').setValidators(Validators.required);
        this.formGroup.get('rooms').setValidators(Validators.required);
        this.formGroup.get('garageSize').setValidators(Validators.required);
        this.formGroup.get('direction').setValidators(Validators.required);
        this.formGroup.get('houseSize').setValidators(Validators.required);
        this.formGroup.get('lotSize').setValidators(Validators.required);
        this.formGroup.get('listPrice').setValidators(Validators.required);
        // this.formGroup.get('mlsListingId').setValidators(Validators.required);
        this.formGroup.get('status').setValidators(Validators.required);
        this.formGroup.get('available').setValidators(Validators.required);
        // this.formGroup.get('hoaFee').setValidators(Validators.required);

        this.formGroup.get('saleManager').updateValueAndValidity();
        this.formGroup.get('community').updateValueAndValidity();
        this.formGroup.get('city').updateValueAndValidity();
        this.formGroup.get('county').updateValueAndValidity();
        this.formGroup.get('schoolISD').updateValueAndValidity();
        this.formGroup.get('address').updateValueAndValidity();
        this.formGroup.get('stories').updateValueAndValidity();
        this.formGroup.get('baths').updateValueAndValidity();
        this.formGroup.get('rooms').updateValueAndValidity();
        this.formGroup.get('garageSize').updateValueAndValidity();
        this.formGroup.get('direction').updateValueAndValidity();
        this.formGroup.get('houseSize').updateValueAndValidity();
        this.formGroup.get('lotSize').updateValueAndValidity();
        this.formGroup.get('listPrice').updateValueAndValidity();
        // this.formGroup.get('mlsListingId').updateValueAndValidity();
        this.formGroup.get('status').updateValueAndValidity();
        this.formGroup.get('available').updateValueAndValidity();
        // this.formGroup.get('hoaFee').updateValueAndValidity();
      }
    )
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

  // checkPassword(control) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // checkInUseEmail(control) {
  //   // mimic http database access
  //   let db = ['jack@torchwood.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  // getErrorEmail() {
  //   return this.formGroup.get('email').hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }

  onSubmit(home :HomeInventory) {
    this.homeInventoryService.createHome(home).subscribe({
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