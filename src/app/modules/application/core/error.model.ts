export class Error {
    message?: string;
    modelState: object;
    exceptionMessage: string;
    exceptionType: string;
    errors: object[];
    httpStatus: number;

    constructor(message?: string) {
        this.message = message;
    }
}
