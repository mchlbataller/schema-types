import { Model, Schema } from "mongoose";
export declare class SchemaConstructor {
    private type;
    private isUnique;
    reset(): void;
    /** ========= Data types */
    string(): this;
    number(): this;
    boolean(): this;
    /** ========= End of data types */
    unique(): this;
    required(): {
        type: StringConstructor | NumberConstructor | typeof Schema.Types.ObjectId | BooleanConstructor | ArrayConstructor;
        unique: boolean;
        required: boolean;
    };
    default(defaultValue?: string | boolean | number): {
        type: StringConstructor | NumberConstructor | typeof Schema.Types.ObjectId | BooleanConstructor | ArrayConstructor;
        unique: boolean;
        default: string | number | boolean;
    };
    ref(ref: string | Model<any, {}, {}>): {
        type: StringConstructor | NumberConstructor | typeof Schema.Types.ObjectId | BooleanConstructor | ArrayConstructor;
        ref: string | Model<any, {}, {}, {}, any>;
    };
    objectId(): this;
}
export declare const schemaTypes: SchemaConstructor;
//# sourceMappingURL=index.d.ts.map