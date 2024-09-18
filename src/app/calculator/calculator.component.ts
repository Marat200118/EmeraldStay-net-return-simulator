import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

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

    // Year 1 - 30% fees
    const year1NetIncome = yearlyRent * 0.7 - this.annualRentalFee;

    // Year 2 - 25% fees
    const year2NetIncome = yearlyRent * 0.75 - this.annualRentalFee;

    // Year 3 - 20% fees
    const year3NetIncome = yearlyRent * 0.8 - this.annualRentalFee;

    const totalIncome = year1NetIncome + year2NetIncome + year3NetIncome;
    const totalReturn = totalIncome / this.purchasePrice;

    this.results = {
      year1NetIncome,
      year2NetIncome,
      year3NetIncome,
      totalReturn
    };
  }
}
