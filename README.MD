<div>
    <h1>Mindbody API</h1>
    <p><b>Type safe library for interacting with Mindbody's Public API (v6) and Webhooks</b></p>
    <img src="https://img.shields.io/badge/latest-0.1.0-black?style=flat-square" alt="Latest version of splitpass/mindbody-api is 0.1.0">
</div>
<br />

> :warning: **Read before installing**\
> This library is typed according to the definitions available in Minbody's [API docs](https://developers.mindbodyonline.com/PublicDocumentation/V6#endpoints). Their API is a shitshow and fails to establish consistent patterns and field type definitons. An `ID` may be typed as a `string` or `number` and commonly swaps to a different type depending on the endpoint. Schema definitions are sometimes incomplete or completely wrong. Schema fields and endpoint paramters are only sometimes marked as nullable / optional. **Please keep all this in mind when using this library. SplitPass uses this library internally (heavily) and we will correct / expand type definitions as we run accross issues. BUT, we do not interact with 100% of Mindbody's API. Please submit an issue or PR if you find an issue or would like to expand a type definition (ex. make a field nullable or query param / payload param optional)**

The package includes all endpoints added before or during the **September 2022 release**.

PRs are welcome if we are behind the release schedule and you would like to use a new endpoint that was added

https://developers.mindbodyonline.com/Resources/ApiReleaseNotes

## Requirements

Node 12.4 or higher.

## Installation

Install the package with:

```sh
npm install mindbody-api --save
# or
yarn add mindbody-api
```

## Usage

Mindbody requires an **API key** to interact with endpoints and **may additionally
require a token generated from your staff credentials**.
Actions such as adding clients to a class require a user token
included in the request headers. Tokens may only be generated for locations
that have explicitly granted you permission. Some endpoints may limit the
data returned if no token is provided.

https://developers.mindbodyonline.com/

```ts
import { Config } from 'mindbody-api';

Config.setup({
  apiKey: '',
});
// or
Config.setup({
  apiKey: '',
  username: '',
  password: '',
});
```

### Example

Endpoints are logically separated based on the categories listed [here](https://developers.mindbodyonline.com/PublicDocumentation/V6#endpoints).

```ts
import { Class, Client, Staff } from 'mindbody-api';

const classes = await Class.getClassSchedules({
  siteID: '123',
  params: {
    StartDate: '2022-01-01',
    LocationIds: [1, 2],
  },
});

const newClient = await Client.addClient({
  siteID: '123',
  payload: { ... }
})

/**
 * Endpoints with optional parameters
 * or payloads may exclude the field
 */
const staff = await Staff.getStaff({
  siteID: '123',
});
```

### Types

All model definitions are exported under `MBType`. A full list of models can be found [here](https://developers.mindbodyonline.com/PublicDocumentation/V6#shared-resources). Additional models were added for easy access to complex types not listed in Mindbody's documentation

```ts
import { MBType } from 'mindbody-api';

const staff: MBType.Staff = ...;
const client: MBType.Client = ...;
```

## Roadmap

| Version | Features                       |
| ------- | ------------------------------ |
| 0.2.0   | Auto pagination, webhooks      |
| 1.0.0   | Test coverage, type refinement |
