export class Card {
    firstName: string;
    lastName: string;
    votes: number;
    constructor(
        firstName: string,
        lastName: string,
        votes: number
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.votes = votes;
    }

    get fullName(): string{
        return this.firstName + ' ' + this.lastName
    }
}
