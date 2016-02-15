# confidence95

Given a list of numbers calculates the 95% confidence interval.

## Motivation

Found myself writing the same script to calculate the confidence interval for
various lists time and time again. This should mitigate that problem.

Using NPM for simple installs and possible updates.

## Install

```bash
npm install -g confidence95
```

## CLI Usage

```bash
~ confidence95 12 13 15
13.333333333333334 +/- 1.4113353846904737
```

## API Usage

```javascript
var confidence95 = require('confidence95');
var conf = confidence95([12 13 15]);
/*
conf = {
  mean: 13.333333333333334,
  std: 1.247219128924647,
  interval: 1.4113353846904737
}
*/
```
