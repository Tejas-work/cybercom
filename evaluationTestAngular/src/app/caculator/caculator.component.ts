import { Component } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent {
  loanAmount: number = 30000;
  monthsNo: number = 30;
  rateInterest: number = 10.0;
  Emi: any = this.getEmi();
  monthlyInterest = this.rateInterest / 1200;
  tableData:any;

ngOnInit(){
this.tableData = this.getTableData();
}

  getLoanAmount(amount: string) {
    this.loanAmount = Number(amount);
    this.tableData = this.getTableData();

  }


  getMonths(months: string) {
    this.monthsNo = Number(months);
    this.tableData = this.getTableData();
  }

  getRate(rate: string) {
    this.rateInterest = Number(rate);
    this.tableData = this.getTableData();
  }

  getEmi() {
    const monthlyInterestRate = this.rateInterest / (12 * 100);
    const numerator = this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.monthsNo);
    const denominator = Math.pow(1 + monthlyInterestRate, this.monthsNo) - 1;
    const emi = numerator / denominator;

    return emi;
  }

  getTotalInterest() {
    const totalInterest = this.getEmi() * this.monthsNo - this.loanAmount;
    return totalInterest.toFixed(2);
  }

  getPayableAmount() {
    const payableAmount = this.getEmi() * this.monthsNo;
    return payableAmount.toFixed(2);
  }

  getInterestPercentage() {
    const totalInterest:any = this.getTotalInterest();
  const payableAmount:any = this.getPayableAmount();
  const interestPercentage = (totalInterest / payableAmount) * 100;
  return interestPercentage.toFixed(2);
  }


  getTableData() {
    let obj: any[] = [];
    let tableBeggingBalance = this.loanAmount;
    let interestRate = this.rateInterest / 1200;
    let emi = this.getEmi();


    for (let i = 1; i <= this.monthsNo; i++) {
      let interestAmount = tableBeggingBalance * interestRate;
      let principle = emi - interestAmount;
      let endingBalance = tableBeggingBalance - principle;


      let monthlyData = {
        id: i,
        beginningBalance: tableBeggingBalance.toFixed(2),
        emi: emi.toFixed(2),
        principle: principle.toFixed(2),
        interest: interestAmount.toFixed(2),
        endingBalance: endingBalance.toFixed(2)
      };

      obj.push(monthlyData);

      tableBeggingBalance = endingBalance;
    }
    return obj
  }






}

