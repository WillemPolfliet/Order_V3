import { Address } from './Address';
import { Email } from './Email';
import { PhoneNumber } from './PhoneNumber';

export class CustomerDetail{
    id: string;
    firstName: string;
    lastName: string;
    email: Email; 
    address: Address;  
    phoneNumber: PhoneNumber;     
}
