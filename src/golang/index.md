# Golang

- [Official Site](https://go.dev/) and [Playground](https://go.dev/play/)
- [Docs](https://go.dev/doc/)
- [Packages](https://pkg.go.dev/)
- [Installation](https://go.dev/dl/)

## Cheatsheets

- https://www.codecademy.com/learn/learn-go/modules/learn-go-introduction/cheatsheet
- https://devhints.io/go
- https://quickref.me/go.html

## Tutorials/Courses

### Official

- https://go.dev/learn/
- https://go.dev/doc/tutorial/getting-started

### Free/Teaser

- [CodeCademy > Learn Go](https://www.codecademy.com/learn/learn-go)

### Commercial/Paid

- [Udemy > Go - The Complete Guide](https://www.udemy.com/share/109Zo23@q5HJ6wkSZldgjNVe8ytbl_HSAEIU_M0Ds4Mtr7R-ELjLkoOsMAYXaytYar9GPz_M)

## The Hello World

With your choice of command line tool, enter your home directory.

```bash
cd

# Windows legacy versions (before 11)
cd %HOMEPATH%
```

Create a project folder for the trial.

```bash
mkdir trial-golang
cd trial-golang
```

Initiate the project module

```bash
go mod init example/trial-golang
```

```bash
# Output
go: creating new go.mod: module example/trial-golang
```

Create a file names `hello.go` in the project folder. Paste the following codes into it, then save the file:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Run the code to view the output.

```bash
go run .
```

```bash
# Output
Hello, World!
```
