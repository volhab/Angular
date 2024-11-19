import { Component, Input, OnChanges } from "@angular/core";
import { Customer, CustomerDetail } from '../app.component';

@Component({
  selector: "customer-details",
  templateUrl: "./customerDetails.component.html",
  styleUrls: ["./customerDetails.component.scss"]
})

export class CustomerDetails implements OnChanges {

  @Input() customerDetailsRecords: CustomerDetail[] = [];
  @Input() selectedId: string = '';
  @Input() customers: Customer[] = [];

  public customerDetail: CustomerDetail;
  public customer: Customer;

  constructor() {
  }

  ngOnChanges() {
      this.customerDetail = this.customerDetailsRecords.find(c => c.id ==  this.selectedId)!;
      this.customer = this.customers.find(c => c.id ==  this.selectedId)!;
  }
}
