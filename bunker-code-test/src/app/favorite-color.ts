export class FavoriteColor {

    constructor(public firstName: string, public lastName: string, public color: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.color = color;
    }

    reset() {
        this.firstName = null;
        this.lastName = null;
        this.color = null;
    }
}
