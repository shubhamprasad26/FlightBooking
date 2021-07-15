export class ManageAirlines
{
    AirlineId? : number = 0;
    Logo? : string = "";
    CompanyName? : string ='' ;
    ContactNo? : number =0;
    BriefInfo? : string ;

    constructor(a?:number, b?:string, c?:string, d?:number)
    {
        this.AirlineId=a;
        this.Logo=b;
        this.CompanyName=c;
        this.ContactNo=d;
    }
    
}