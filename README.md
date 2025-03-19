# SchemaConstructor

Enables Joi/yup-like implementation for **mongoose** schemas.

# Quick Start
## Install
```sh
npm install @mchlbataller/schematypes@1.0.4
```

## Usage

```ts
import { Schema } from "mongoose";
import { schemaTypes } from "_utils/database/schemaTypes.ts";

const SomeSchema = new Schema({
	someRequiredStringField: schemaTypes.string().required(),
	someRequiredObjectIdField: schemaTypes.objectId().ref(SomeModel),
});
```

Created by Michael with <3
