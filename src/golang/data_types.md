# Data Types

## Integer

| Signed       | Unsigned     |
| ------------ | ------------ |
| int8         | uint8 (byte) |
| int16        | uint16       |
| int32 (rune) | uint32       |
| int64        | uint64       |

Mark directly with _int_, which is the recommended method, would automaticly use the word size of the OS (32/64). This is also the case for _uintptr_ and _uint_.

## Float

- float32
- float64
- NaN (Representing non-number values: 0/0, etc.)

Float numbers are not precise, use float64 for maximum approximity.

Check the type of a float variable with _reflect_ package:

```go
package main
import (
  "fmt"
  "reflect"
)
func main() {
  a := 1.4
  fmt.Println("Type of variable a is refered as: ", reflect.TypeOf(a))
}
```

Use _math/big_ package to compare 2 floats.

## Boolean

An integer with a length of 1.

Only `true` or `false` is valid boolean value, `1` or `"true"` won't pass.

## Character

Single character, define with single quotes. It would be transformed into an interger value represented in utf8.

Usually, each charater in a string represents one byte. Yet for some language, one character is represented with multiple bytes.

```go
var a = 'A'
```

## String

Create a string with _"_ or _`_ symbols.

```go
string(abc) // Transform a value to string
len(xyz) // Get string length
"abc" + "xyz" // Concat two strings into one
"CdeXyz"[2] // Get the 3rd character of the string. The output is 101, because single character is represented by a byte (a uint8).
```

Escape characters:

| Character | Meaning                   |
| --------- | ------------------------- |
| `\r`      | Return                    |
| `\n`      | Next Line (same position) |
| `\t`      | Tab                       |
| `\', \"`  | Quotes                    |
| `\\`      | Back Slash                |

Original string:

```go
s := `All characters, for example "c:\Users\kamaslau\Apps" will be displayed as original, no escape signs are needed.`
```

获取字符串底层字节数组的长度：

```go
length := len(stringName)
```

获取字符串实际字符（rune 类型的字符串）个数：

```go
import "unicode/utf8"

utf8.RuneCountInString(stringName)

```

## Array

Array in Golang is a value type, not a reference type. This means that when pass an array to a function, all values would be copied, so change won't be made to the original variable.

All items in array are stored consecutively in memory, and all items are of a same data type.

The length of an array is not mutable.

Declare an array with its length and data type:

```go
a := [5]int{1,2,3,4,5}
```

Give or change value of an item with position index:

```go
a[2]
a[2] = 3
```

## Pointer

Variable could be a pointer type, a pointer states a memory address.

```go
var a *int
var aPointer = &a // Get the pointer of a
```

## Slice

```go
var x[]float64

// This creates a slice of float64 type with a length of 5 and a capacity of 10. The capacity of the underlying array can be larger than the length of the slice, allowing for future growth.
x := make([]float64, 5, 10)

// Create a slice from an array
arr := [5]float64{1,2,3,4,5}
x := arr[0:5] // the end index is 4, but it is not included so needs to use 5 as ending point index
x := arr[0:] // till the end, equals to arr[0:len(arr)]
x := arr[:5] // from the start, equals to arr[0:5]
x := arr[:] // equals to arr[0:len(arr)]
```

### Append

```go
func main() {
  slice1 := []int{1,2,3}
  slice2 := append(slice1, 4, 5)
  fmt.Println(slice1, slice2)
}
```

### Copy

```go
func main() {
  slice1 := []int{1,2,3}
  slice2 := make([]int, 2)
  copy(slice2, slice1)
  fmt.Println(slice1, slice2)
}
```

If length of two slices are not equal, the shorter length will be used.

## Map

```go
x := make(map[string]int)
x["key"] = 10
fmt.Println(x["key"])

// Or
elements := map[string]string{
    "H":  "Hydrogen",
    "He": "Helium",
}
```

Check if a key value exists:

```go
if name, ok := elements["Un"]; ok {
  fmt.Println(name, ok)
}
```

### Delete

```go
delete(x, 1)
```
