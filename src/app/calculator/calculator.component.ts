import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  purchasePrice: number = 0;
  monthlyRent: number = 0;
  annualRentalFee: number = 0;
  results: any;

  calculate() {
    const yearlyRent = this.monthlyRent * 12;

    //year 1 - 30% agency fees
    const year1AgencyFees = yearlyRent * 0.30;
    const year1NetIncome = yearlyRent - year1AgencyFees - this.annualRentalFee;
    const year1MonthlyNetIncome = year1NetIncome / 12;  //net income for year 1/month
    const year1Return = (year1NetIncome / this.purchasePrice) * 100;  // percentage

    //year 2 - 25% agency fees
    const year2AgencyFees = yearlyRent * 0.25;
    const year2NetIncome = yearlyRent - year2AgencyFees - this.annualRentalFee;
    const year2MonthlyNetIncome = year2NetIncome / 12;  //net income for year 2/month
    const year2Return = (year2NetIncome / this.purchasePrice) * 100;  // percentage

    //year 3 - 20% agency fees
    const year3AgencyFees = yearlyRent * 0.20;
    const year3NetIncome = yearlyRent - year3AgencyFees - this.annualRentalFee;
    const year3MonthlyNetIncome = year3NetIncome / 12;  //net income for year 3/month
    const year3Return = (year3NetIncome / this.purchasePrice) * 100;  // percentage

    this.results = {
      year1NetIncome: year1MonthlyNetIncome,
      year1Return: year1Return,
      year2NetIncome: year2MonthlyNetIncome,
      year2Return: year2Return,
      year3NetIncome: year3MonthlyNetIncome,
      year3Return: year3Return,
    };
  }
}
