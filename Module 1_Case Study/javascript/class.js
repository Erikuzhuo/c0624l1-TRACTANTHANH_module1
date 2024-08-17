class Humans {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

class NameList extends Humans {
    constructor(id, name,position, role, email, phone, username, password) {
        super(name);
        this.id = id
        this.position = position;
        this.role = role;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    setUsername(userName) {
        this.username = userName;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getID() {
        return this.id;
    }

    setID(id) {
        this.id = id;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }

    setEmail(email) {
        this.email = email;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }
}

class ClientName extends Humans {
    constructor(id, name,nationID, gender, birthDate, address, phone, note, mail) {
        super(name);
        this.gender = gender;
        this.id = id;
        this.nationID = nationID;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
        this.note = note;
        this.mail = mail;
    }

    getID() {
        return this.id;
    }

    setID(id) {
        this.id = id;
    }

    getNationID() {
        return this.nationID;
    }

    setNationID(nationID) {
        this.nationID = nationID;
    }

    getBirthDate() {
        return this.birthDate;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getEmail() {
        return this.mail;
    }

    setEmail(mail) {
        this.mail = mail;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getNote() {
        return this.note;
    }

    setNote(note) {
        return this.note = note;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        return this.address = address;
    }
}

class Goods{
    constructor(name,description) {
    this.name = name;
    this.description = description;
    }
    getName(){
        return this.name;
    }
    setName(name) {
        this.name=name;
    }
    getDescription(){
        return this.description
    }
    setDescription(description) {
        this.description=description;
    }
}
class Products extends Goods{
    constructor(code,name,group,unit,price,cost,description,location,stock,stockStatus){
        super(name,description);
        this.code=code;
        this.group=group;
        this.unit=unit;
        this.price=price;
        this.cost=cost;
        this.location=location;
        this.stock=stock;
        this.stockStatus=stockStatus;
    }
    getCode(){
        return this.code;
    }
    setCode(code){
        this.code=code;
    }
    getGroup(){
        return this.group;
    }
    setGroup(group){
        this.group=group;
    }
    getUnit(){
        return this.unit;
    }
    setUnit(unit){
        this.unit=unit;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price=price;
    }
    getCost(){
        return this.cost;
    }
    setCost(cost){
        this.cost=cost;
    }
    getLocation(){
        return this.location;
    }
    setLocation(location){
        this.location=location;
    }
    getStock(){
        return this.stock;
    }
    setStock(stock){
        this.stock=stock;
    }
    getStockStatus(){
        return  this.stockStatus;
    }
    setStockStatus(stockStatus){
        this.stockStatus=stockStatus;
    }
}
