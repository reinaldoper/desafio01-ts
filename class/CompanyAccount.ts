import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    this.balance += loan
    console.log('Você pegou um empréstimo.')
  }
}
