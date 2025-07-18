# Function

```go
func average(xs []float64) float64 {
  total := 0.0
  for _, v := range xs {
      total += v
  }
  return total / float64(len(xs))
}

// Return value can be named
func f2() (r int) {
  r = 1
  return
}

// Can return multiple values
func f() (int, int) {
  return 5, 6
}
func main() {
  x, y := f()
}

// Zero or Multiple input parameters
func add(args ...int) int {
  total := 0
  for _, v := range args {
    total += v
  }
  return total
}
func main() {
  fmt.Println(add(1,2,3))
}

// Destruct and pass slice items to function
func main() {
  xs := []int{1,2,3}
  fmt.Println(add(xs...))
}
```

## Closure

```go
func makeEvenGenerator() func() uint {
  i := uint(0)
  return func() (ret uint) {
    ret = i
    i += 2
    return
  }
}
func main() {
  nextEven := makeEvenGenerator()
  fmt.Println(nextEven()) // 0
  fmt.Println(nextEven()) // 2
  fmt.Println(nextEven()) // 4
}
```

## Defer

```go
package main

import "fmt"

func first() {
  fmt.Println("1st")
}

func second() {
  fmt.Println("2nd")
}

func main() {
  defer second()
  first()
}
```

Means:

```go
func main() {
  first()
  second()
}
```

## Panic & Recover

```go
package main

import "fmt"

func main() {
  // Defer postponed the function execution until end of current function
  defer func() {
    str := recover()
    fmt.Println(str)
  }()
  panic("PANIC")
}
```
