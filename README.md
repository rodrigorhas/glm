glm
===

Gitlab Manager CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/glm.svg)](https://npmjs.org/package/glm)
[![Downloads/week](https://img.shields.io/npm/dw/glm.svg)](https://npmjs.org/package/glm)
[![License](https://img.shields.io/npm/l/glm.svg)](https://github.com/rodrigorhas/glm/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g glm
$ glm COMMAND
running command...
$ glm (-v|--version|version)
glm/0.0.0 linux-x64 node-v15.12.0
$ glm --help [COMMAND]
USAGE
  $ glm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`glm autocomplete [SHELL]`](#glm-autocomplete-shell)
* [`glm config`](#glm-config)
* [`glm config:show`](#glm-configshow)
* [`glm group:create-labels`](#glm-groupcreate-labels)
* [`glm help [COMMAND]`](#glm-help-command)

## `glm autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ glm autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ glm autocomplete
  $ glm autocomplete bash
  $ glm autocomplete zsh
  $ glm autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `glm config`

Create a configuration at $HOME/.glm/config.json

```
USAGE
  $ glm config

OPTIONS
  -h, --help     show CLI help
  --host=host    (required) Gitlab Host
  --token=token  (required) Gitlab Token

EXAMPLE
  $ glm config --token <TOKEN> --host 'https://gitlab.example.com'
```

_See code: [src/commands/config/index.ts](https://github.com/rodrigorhas/glm/blob/v0.0.0/src/commands/config/index.ts)_

## `glm config:show`

Show configuration file

```
USAGE
  $ glm config:show

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ glm config show
```

_See code: [src/commands/config/show.ts](https://github.com/rodrigorhas/glm/blob/v0.0.0/src/commands/config/show.ts)_

## `glm group:create-labels`

Create group labels from file

```
USAGE
  $ glm group:create-labels

OPTIONS
  -f, --file=file        (required) filePath to import
  -g, --groupId=groupId  (required) Gitlab Group ID. Ex: 40
  -h, --help             show CLI help

EXAMPLE
  $ glm create-labels --groupId=52 --file=./test_files/labels.ts
```

_See code: [src/commands/group/create-labels.ts](https://github.com/rodrigorhas/glm/blob/v0.0.0/src/commands/group/create-labels.ts)_

## `glm help [COMMAND]`

display help for glm

```
USAGE
  $ glm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
