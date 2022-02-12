/* eslint-disable @typescript-eslint/ban-types */
import { Model, Schema } from "mongoose";

class SchemaConstructor {
	private type:
		| StringConstructor
		| NumberConstructor
		| typeof Schema.Types.ObjectId
		| BooleanConstructor
		| ArrayConstructor;
	private isUnique: boolean;

	public reset() {
		this.isUnique = false;
	}

	/** ========= Data types */
	// There is always this.reset() on these functions so that this.isUnique will not persist.
	public string() {
		this.reset();

		this.type = String;

		return this;
	}

	public number() {
		this.reset();
		this.type = Number;

		return this;
	}

	public boolean() {
		this.reset();
		this.type = Boolean;

		return this;
	}
	/** ========= End of data types */

	public unique() {
		this.isUnique = true;

		return this;
	}

	public required() {
		return {
			type: this.type,
			unique: this.isUnique,
			required: true,
		};
	}

	public default(defaultValue?: string | boolean | number) {
		return {
			type: this.type,
			unique: this.isUnique,
			default: defaultValue === undefined ? "" : defaultValue,
		};
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public ref(ref: string | Model<any, {}, {}>) {
		return {
			type: this.type,
			ref: ref,
		};
	}

	public objectId() {
		this.type = Schema.Types.ObjectId;

		return this;
	}
}

export const schemaTypes = new SchemaConstructor();
