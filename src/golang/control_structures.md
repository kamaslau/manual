# Control Structures

## for

There is no while, do loops in Golang, just for loop.

```go
package main

import "fmt"

func main() {
  i := 1
  for i <= 10 {
    fmt.Println(i)
    i = i + 1
  }

  // Or
  for i := 1; i <= 10; i++ {
    fmt.Println(i)
  }
}
```

## if

```go
if i % 2 == 0 {
  // divisible by 2
} else if i % 3 == 0 {
  // divisible by 3
} else if i % 4 == 0 {
  // divisible by 4
} else {
  // Other cases
}
```

## switch

```go
switch i {
  case 0: fmt.Println("Zero")
  case 1: fmt.Println("One")
  case 2: fmt.Println("Two")
  case 3: fmt.Println("Three")
  case 4: fmt.Println("Four")
  case 5: fmt.Println("Five")
  default: fmt.Println("Unknown Number")
}
```
