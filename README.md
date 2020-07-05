# ex-yaml
CLI tool to extract values from a YAML file.  
Useful for setting environment variables from YAML.

## Installation
```bash
yarn add ex-yaml
```

## Usage

Format:
```bash
ex-yaml <file> <name>
```

Sample usage with yarn:

```bash
PORT=$(yarn -s ex-yaml ./config.yaml my_port) ...
```
<i>(Note the `-s` (`--silent`) flag, otherwise yarn's output will interfere.)</i>

Equivalent result:
```bash
PORT=3000 ...
```

Example YAML file (config.yaml):
```yaml
my_port: 3000
```
