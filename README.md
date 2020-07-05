# ex-yaml
CLI tool to extract values from a YAML file.  
Useful for setting environment variables from YAML.

## Installation
```bash
yarn add ex-yaml
```

## Usage

Sample YAML file (config.yaml):
```yaml
my_port: 3000
```

Sample usage:

```bash
PORT=$(ex-yaml ./config.yaml my_port) && ...
```

Equivalent result:
```bash
PORT=3000 && ...
```
