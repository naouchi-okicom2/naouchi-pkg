export class NaouchiPkg {
    #_text: string;
    constructor(text: string) {
        this.#_text = text;
    }

    public print(): void {
        console.log(this.#_text);
    }

    public async reversePrint(): Promise<void> {
        console.log(this.#_text.split('').reverse().join(''));
    }
}
