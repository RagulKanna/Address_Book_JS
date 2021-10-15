class Contact {
    first_Name;
    last_Name;
    address;
    city;
    state;
    zip;
    phone_Number;
    email;

    constructor(...params) {
        this.first_Name = params[0];
        this.last_Name = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_Number = params[6];
        this.email = params[7];
    }
    get first_Name() {
        return this._first_Name;
    }

    get last_Name() {
        return this._last_Name;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phone_Number() {
        return this._phone_Number;
    }

    get email() {
        return this.email;
    }

    set first_Name(first_Name) {
        this._first_Name = first_Name;
    }

    set last_Name(last_Name) {
        this._last_Name = last_Name;
    }

    set city(city) {
        this._city = city;
    }

    set state(state) {
        this._state = state;
    }

    set zip(zip) {
        this._zip = zip;
    }

    set phone_Number(phone_Number) {
        this._phone_Number = phone_Number;
    }

    set email(email) {
        this._email = email;
    }

    toString() {
        return "First Name : " + this.first_Name + ",\nLast Name : " + this.last_Name + ",\nCity : " + this.city + ",\nState : " + this.state + ",\nZip : " + this.zip + ",\nPhone Number : " + this.phone_Number + ",\nEmail : " + this.email;
    }
}

let new_contact = new Contact("Ragul", "Kanna", "Sankari", "Salem", "TamilNadu",637301,9500744651,"ragulragi619@gmail.com");
console.log("Welcome to address book program....")
console.log(new_contact.toString());