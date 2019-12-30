import { ValidationError } from '@hapi/joi';

export class GenericError extends Error {
    public status: number;
    /**
     * Populated by celebrate library if request-parsing fails
     */
    public joi?: ValidationError;
}
