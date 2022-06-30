export class Todo {
    private _text: string;
    private _active: boolean;
    private _id: string;

    constructor(text: string) {
        this._text = text;
        this._active = true;
        this._id = new Date().getTime().toString();
    }

    setText(value: string): Todo {
        this._text = value;
        return this;
    }

    setActive(value: boolean): Todo {
        this._active = value;
        return this;
    }

    setId(value: string): Todo {
        this._id = value;
        return this;
    }

    get text(): string {
        return this._text;
    }

    get active(): boolean {
        return this._active;
    }

    get id(): string {
        return this._id;
    }
}
