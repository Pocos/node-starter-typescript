import { ValidationError } from '@hapi/joi';

export class GenericError extends Error {
    private _status: number;

    get status(): number {
        return this._status;
    }

    /**
     * Populated by celebrate library if request-parsing fails
     */
    public joi?: ValidationError;

    public constructor(stack: string, status: number) {
        super(stack);
        this._status = status;
    }
}
