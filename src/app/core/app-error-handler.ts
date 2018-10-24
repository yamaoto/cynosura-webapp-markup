import { ErrorHandler } from '@angular/core';
import { writeError } from './logger';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        writeError('AppErrorHandler', error);
    }
}
