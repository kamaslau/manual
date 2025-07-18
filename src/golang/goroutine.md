# Goroutine

```go
package main

import "fmt"

func f(n int) {
  for i := 0; i < 10; i++ {
    fmt.Println(n, ":", i)
  }
}

func main() {
  go f(0) // this should immediately move to the next line aftered triggered
  var input string
  fmt.Scanln(&input) // keep the program alive, so that the execution won't exit
}
```

## Channel

```go
package main

import (
  "fmt"
  "time"
)

func pinger(c chan string) {
  for i := 0; ; i++ {
    c <- "ping" // send message to channel
  }
}

func printer(c chan string) {
  for {
    msg := <- c // read message from channel
    fmt.Println(msg)
    time.Sleep(time.Second * 1)
  }
}

func main() {
  var c chan string = make(chan string) // channel allows string type messages

  go pinger(c)
  go printer(c)

  var input string
  fmt.Scanln(&input)
}
```

To restrict the communicate directions:

```go
func pinger(c chan<- string) // write only
func printer(c <-chan string) // read only
```

## select

```go
func main() {
  c1 := make(chan string)
  c2 := make(chan string)

  go func() {
    for {
      c1 <- "from 1"
      time.Sleep(time.Second * 2)
    }
  }()

  go func() {
    for {
      c2 <- "from 2"
      time.Sleep(time.Second * 3)
    }
  }()

  go func() {
    for {
      select {
      case msg1 := <- c1:
        fmt.Println("Message 1", msg1)
      case msg2 := <- c2:
        fmt.Println("Message 2", msg2)
      case <- time.After(time.Second): // if no message is sent to either channel after time.Second
        fmt.Println("timeout")
      default:
        fmt.Println("nothing ready")
      }
    }
  }()

  var input string
  fmt.Scanln(&input)
}
```

Allow buffer:

```go
c := make(chan int, 2) // create a buffer channel with capacity of 2
```
