# Syntax

## Comments

```golang
// Single Line

/*
  Multiple Line(s)
*/
```

## Package

For entry file, the package name must be 'main', and one (only one) main function must exist.

```golang
package main

import "fmt"

func main (){
  fmt.Println("Hello world!")
}
```

## Command Line

### os.Args()

Get cli arguments:

```golang
package main
import "fmt"
import "os"
func main(){
  // Retrieve and echo all arguments
  for i, arg := range os.Args {
    fmt.Pringf("参数%d = %s\n", i, arg)
  }
}
```

Run with:

```golang
go run main.go arg1 arg2 arg3
```

### os.Flag()

```golang
package main
import "flag"
import "fmt"

func main (){
  var stringVal = flag.String("stringVal","","a argument of string type")
  flag.Parse()
  fmt.Println("-stringVal: ", *stringVal)
}
```

Run with:

```bash
go run main.go -stringVal="argument content"
```
