export class CustomFilter {
    private _substring: string;
    private _active: boolean;

    constructor(substring: string, active: boolean) {
        this._substring = substring;
        this._active = active;
    }


    get substring(): string {
        return this._substring;
    }

    get active(): boolean {
        return this._active;
    }
}
