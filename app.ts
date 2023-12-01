import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AnonimusAccount } from './class/AnonimusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.getLoan(10)
companyAccount.getBalance()


const anonimo: AnonimusAccount = new AnonimusAccount('Ruan', 10)
anonimo.deposit(120)
anonimo.getBalance()
anonimo.withdraw(100)
anonimo.getBalance()
anonimo.withdraw(100)