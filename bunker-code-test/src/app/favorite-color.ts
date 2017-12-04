export class FavoriteColor {

    constructor(public firstName: string, public lastName: string, public favoriteColor: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
    }

    reset() {
        this.firstName = null;
        this.lastName = null;
        this.favoriteColor = null;
    }
}
