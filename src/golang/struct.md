# Struct

## Statement

```go
type Circle struct {
  x float64
  y float64
  r float64
}

// Or
type Circle struct {
  x, y, r float64
}
```

## Initiate

```go
var c Circle
// Or
c := new(Circle)
// Or
c := Circle{x: 0, y: 0, r: 5}
// Or
c := Circle{0, 0, 5}

// To directly get the pointer of initiated struct
c := &Circle{0, 0, 5}

// Get/set value by key
fmt.Println(c.x, c.y, c.r)
c.x = 10
c.y = 5
```
## Receiver

```go
func (c *Circle) area() float64 {
  return math.Pi * c.r*c.r
}
fmt.Println(c.area())

// Another example
type Person struct {
  Name string
}
func (p *Person) Talk() {
  fmt.Println("Hi, my name is", p.Name)
}
```
## Structs in Structs

```go
type Person struct {
  Name string
}
func (p *Person) Talk() {
  fmt.Println("Hi, my name is", p.Name)
}

type Android struct {
  Person Person
  Model string
}
// Better version is
type Android struct {
  Person
  Model string
}

// Use case
a := new(Android)
a.Person.Talk() // Or just a.Talk(), because an Android is a Person, so if a Person talks, an Android surely talks
```