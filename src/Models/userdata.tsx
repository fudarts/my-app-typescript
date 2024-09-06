export class Company {
    
    public name: string;
    public catchPhrase: string;
    public bs: string;

    constructor(Name: string, catchPhrase: string, Bs: string) {
        this.name = Name;
        this.catchPhrase =  catchPhrase;
        this.bs = Bs;
    }
}

export class Geo {
    
    public lat: string;
    public lng: string;

    constructor(Lat: string, Lng: string) {
        this.lat = Lat;
        this.lng = Lng;
    }
}

export class Address {
    
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;

    constructor(Street: string, Suite: string, City: string, ZipCode: string, oGeo: Geo) {
        this.street = Street;
        this.suite =  Suite;
        this.city = City;
        this.zipcode = ZipCode;
        this.geo = oGeo;
    }
}

export class UserData {
    
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: number;
    public website: string;
    public company: Company;

    constructor(ID: number, Name: string, Username: string, Email: string, oAddress: Address, Phone: number, Website: string, oCompany: Company) {
        this.id = ID;
        this.name =  Name;
        this.username = Username;
        this.email = Email;
        this.address = oAddress;
        this.phone = Phone;
        this.website = Website;
        this.company = oCompany;
    }
}