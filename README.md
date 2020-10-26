[![generator-ethereum-client-ci Actions Status](https://github.com/abdelhamidbakhta/generator-ethereum-client/workflows/generator-ethereum-client-ci/badge.svg)](https://github.com/abdelhamidbakhta/generator-ethereum-client/actions)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/abdelhamidbakhta/tx-api-gw/blob/master/LICENSE)
[![sonar-quality-gate][sonar-quality-gate]][sonar-url][![sonar-bugs][sonar-bugs]][sonar-url] [![sonar-vulnerabilities][sonar-vulnerabilities]][sonar-url]

# EIP Generator

## What is it ?

This generator creates configuration files for various Ethereum clients.

## Supported Ethereum clients

| Name   |      Repository      |  Supported |
|----------|:-------------|------:|
| Hyperledger Besu |  https://github.com/hyperledger/besu | No |
| Geth |    https://github.com/ethereum/go-ethereum   |   No |
| Nethermind | https://github.com/NethermindEth/nethermind |    No |
| Open Ethereum | https://github.com/openethereum/openethereum |    No |

## How to use it ?

### Install Prerequisites

- [npm](https://www.npmjs.com/) package manager
- [yeoman](https://yeoman.io/)

#### Install Yeoman
```shell script
npm install -g yo
```

### Install the generator

### Install from source

```shell script
npm install -g
```

### Install from package manager

```shell script
npm install -g generator-ethereum-client
```

### Run the generator

```shell script
yo  ethereum-client
```

#### Run the generator for Hyperledger Besu

```shell script
yo  ethereum-client:hyperledger-besu
```

#### Run the generator for Geth

```shell script
yo  ethereum-client:geth
```

#### Run the generator for Nethermind

```shell script
yo  ethereum-client:nethermind
```

#### Run the generator for Open Ethereum

```shell script
yo  ethereum-client:open-ethereum
```

[sonar-url]: https://sonarcloud.io/dashboard?id=abdelhamidbakhta_generator-ethereum-client
[sonar-quality-gate]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-ethereum-client&metric=alert_status
[sonar-coverage]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-ethereum-client&metric=coverage
[sonar-bugs]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-ethereum-client&metric=bugs
[sonar-vulnerabilities]: https://sonarcloud.io/api/project_badges/measure?project=abdelhamidbakhta_generator-ethereum-client&metric=vulnerabilities

