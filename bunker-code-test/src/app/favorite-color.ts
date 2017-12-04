export class FavoriteColor {

    constructor(private firstName: string, private lastName: string, private favoriteColor: string) {
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
