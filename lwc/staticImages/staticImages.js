import { LightningElement } from 'lwc';
import User_Image from '@salesforce/resourceUrl/User_Image' 
import User_Walking from '@salesforce/resourceUrl/User_Walking' 
export default class StaticImages extends LightningElement {
    userImage=User_Image
    svgImage=User_Walking
}