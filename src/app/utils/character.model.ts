export class Character {
    public id: number
    public name: string;
    public birthday: Date;
    public house: string;

    constructor(id: number, name: string, birthday: Date, house: string) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.house = house;
    }
}