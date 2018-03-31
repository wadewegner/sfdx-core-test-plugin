# sfdx-core-test-plugin

Just playing around with the new Salesforce DX Core Libraries in an OCLIF-based plugin.

## Setup and Use

1) Make sure you have the latest Salesforce CLI:

```
sfdx update
```

2) Clone the repository:

```
git clone git@github.com:wadewegner/sfdx-core-test-plugin.git && cd sfdx-core-test-plugin
```

3) Link the plugin:

```
sfdx plugins:link .
```

4) Run the command:

```
sfdx hello:org
sfdx hello:org --json
```