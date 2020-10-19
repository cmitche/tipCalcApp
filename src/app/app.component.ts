import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome = "Super Negro's World Famous Tip Calculator";
  totalPrice = 0.00;
  priceWithTax = 0.00;
  tenPercentTip = 0.00;
  tenPercentTotal = 0.00;
  fifteenPercentTip = 0.00;
  fifteenPercentTotal = 0.00;
  twentyPercentTip = 0.00;
  twentyPercentTotal = 0.00;
  price = 0.00;
  tax = 0.00;
  tip = 0.00;

  
  //Methods
  calcTip(){
  this.priceWithTax = ((this.price * (this.tax / 100) + this.price));
  this.tenPercentTip = this.priceWithTax * .10;
  this.fifteenPercentTip = this.priceWithTax * .15;
  this.twentyPercentTip = this.priceWithTax * .20;
  this.totalPrice = this.priceWithTax;
  }

  calcFinalPriceTen(){
    this.totalPrice = this.priceWithTax + this.tenPercentTip;
  }

  calcFinalPriceFifteen(){
    this.totalPrice = this.priceWithTax + this.fifteenPercentTip;
  }

  calcFinalPriceTwenty(){
    this.totalPrice = this.priceWithTax + this.twentyPercentTip;
  }

  noTip(){
    this.totalPrice = this.priceWithTax;
  }

  resetCalc(){
    this.price = 0;
    this.totalPrice = 0;
    this.tax = 0;
    this.tip = 0;
    this.tenPercentTip = 0;
    this.fifteenPercentTip = 0;
    this.twentyPercentTip = 0;
    this.tenPercentTotal = 0;
    this.fifteenPercentTotal = 0;
    this.twentyPercentTotal = 0;
    this.priceWithTax = 0;
  }

  // calcTotal(){
  // this.tenPercentTotal = (this.priceWithTax * .10) + this.priceWithTax;
  // this.fifteenPercentTotal = (this.priceWithTax * .15) + this.priceWithTax;
  // this.twentyPercentTotal = (this.priceWithTax * .20) + this.priceWithTax;
  // }

  increasePrice(){
    this.price++;
  }

  decreasePrice(){
    if(this.price != 0){
      this.price--;
    }
  }
  increaseTax(){
    this.tax++;
  }
  decreaseTax(){
    if(this.tax != 0){
    this.tax--;
    }
  }
}
