// import uuid
import { v4 as uuid } from 'uuid';

export class Todo {

    // fields
    /**
     * @type {string}
     */
    id;
    /**
     * @type {string}
     */
    description;
    /**
     * @type {boolean}
     */
    done;
    /**
     * @type {Date}
     */
    createdAt;


    /**
     * @param {string} description
     * @param {string | undefined} id
     * @param {boolean} done
     * @param {Date | undefined} createdAt
     */
    constructor(description, id=undefined, done=false, createdAt=undefined) {
        // validation
        if (description === undefined || description === null || description === '') {
            throw new Error('Description is required');
        }
        this.id = id?? uuid();
        this.description = description;
        this.done = done;
        this.createdAt = createdAt?? new Date();
    }
}