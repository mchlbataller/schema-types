"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaTypes = void 0;
/* eslint-disable @typescript-eslint/ban-types */
const mongoose_1 = require("mongoose");
class SchemaConstructor {
    reset() {
        this.isUnique = false;
    }
    /** ========= Data types */
    // There is always this.reset() on these functions so that this.isUnique will not persist.
    string() {
        this.reset();
        this.type = String;
        return this;
    }
    number() {
        this.reset();
        this.type = Number;
        return this;
    }
    boolean() {
        this.reset();
        this.type = Boolean;
        return this;
    }
    /** ========= End of data types */
    unique() {
        this.isUnique = true;
        return this;
    }
    required() {
        return {
            type: this.type,
            unique: this.isUnique,
            required: true,
        };
    }
    default(defaultValue) {
        return {
            type: this.type,
            unique: this.isUnique,
            default: defaultValue === undefined ? "" : defaultValue,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref(ref) {
        return {
            type: this.type,
            ref: ref,
        };
    }
    objectId() {
        this.type = mongoose_1.Schema.Types.ObjectId;
        return this;
    }
}
exports.schemaTypes = new SchemaConstructor();
