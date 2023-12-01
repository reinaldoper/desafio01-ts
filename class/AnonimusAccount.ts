import { DioAccount } from "./DioAccount"

export class AnonimusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (deposit: number): void => {
    const count = deposit + 10
    this.balance = count
    console.log(`Vc depositou: ${count}.`)
  }
}
