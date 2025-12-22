## What is Package.json?

- It is a metadata file which have information about node project including
  dependency,scripts and configuration details
- npm init (this will install with some query).

## Semantic versioning (MAJOR.MINOR.PATCH)

- { "express": "^4.18.2" }
- ^ will let you modify only MINOR and PATCH changes.

- { "express": "~4.18.2" }
- allow only patch changes. Do not allow MAJOR and MINOR changes
- { "express": "4.18.2" } exact version.
