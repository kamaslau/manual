# Data Types

## Integer

| Signed | Unsigned |
| ------ | -------- |
| int8   | uint8    |
| int16  | uint16   |
| int32  | uint32   |
| int64  | uint64   |

Mark directly with _int_, which is the recommended method, would automaticly use the word size of the OS (32/64).

## Float

- float32
- float64

Check the type of a float variable with _reflect_ package:

```golang
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

Only `true` or `false` is valid boolean value, `1` or `"true"` won't pass.

## Character

Single character, define with single quotes. It would be transformed into an interger value represented in utf8.

```golang
var a = 'A'
```

## String

Transform a value to string:

```golang
string(value_to_transform)
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

```golang
s := `All characters, for example "c:\Users\kamaslau\Apps" will be displayed as original, no escape signs are needed.`
```

获取字符串底层字节数组的长度：

```golang
length := len(stringName)
```

获取字符串实际字符（rune 类型的字符串）个数：

```golang
import "unicode/utf8"

utf8.RuneCountInString(stringName)

```

## Array

Array in Golang is a value type, not a reference type. This means that when pass an array to a function, all values would be copied, so change won't be made to the original variable.

All items in array are stored consecutively in memory, and all items are of a same data type.

The length of an array is not mutable.

Declare an array with its length and data type:

```golang
a := [5]int{1,2,3,4,5}
```

Give or change value of an item with position index:

```golang
a[2]
a[2] = 3
```
