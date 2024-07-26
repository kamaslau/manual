# Variable and Const

## Variable

Initiate variables:

```golang
var length int

// Initiate with value
var length int = 10
var a = 10
a := 10

// Variables with same type
var length, size int

// Variable block: variables with different types
var (
  length, size int
  name string
)

// Give value to variables
var length, size int
length, size = 10, 20

// Exchange values for variables with same type
length, size = size, length
```

Zero value for different types:

- int: 0
- float: 0.0
- bool: false
- string: ""
- array: its items' zero value
- interface, slice, channel, map, pointer, function: nil
- struct: its items' zero value

## Const

Initiation:

```golang
const a = 10

// Const block
const (
  a = 10
  b = 20
  c = 30
)
```

## iota, anonumous variable, and Enum

iota states for the index value of current line in a const block

```golang
const (
  Sunday = iota // 0
  Monday // 1
  Tuesday // 2
  Wednesday = "n" // n
  Thursday = iota // 4, won't break incrementing
  Friday = iota // 5
  Saturday = iota //6
)
```

An anonumous variable could be used to skip an index for iota:

```golang
const (
  _ = iota // 0
  Mon // 1
  Tue // 2
)
```

To set an start value for iota:

```golang
const (
  YEAR1 = iota + 2008 // 0 + 2008 = 2008
  YEAR2 // 2009
  YEAR3 // 2010
)
```
