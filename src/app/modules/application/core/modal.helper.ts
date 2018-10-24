import { Injectable } from '@angular/core';

@Injectable()
export class ModalHelper {
    constructor() { }

    confirmDelete(): Promise<void> {
      throw new Error('not implemented');
    }
}
