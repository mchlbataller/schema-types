# SchemaConstructor

Started as a series of objects but got increasingly large to accommodate multiple requirements.

Somewhat looks like Joi, same usage.

## Usage

```ts
import { Schema } from "mongoose";
import { schemaTypes } from "_utils/database/schemaTypes.ts";

const SomeSchema = new Schema({
	someRequiredStringField: schemaTypes.string().required(),
	someRequiredObjectIdField: schemaTypes.objectId().ref(SomeModel),
});
```

Created by Michael with <3 for Stack Backend.
