# Misc

## Docs

### Package level

```go
go doc fmt
```

### Property/function level

Not case sensitive.

```go
go doc fmt.println
```

## Dependencies

https://golang.cafe/blog/how-to-upgrade-golang-dependencies.html

## Environment Variables

```golang
go env // List all preset envs
go env GOROOT // Root directory in which Golang was installed to.
go env GOPATH // Other directory(s) from which Golang could import packages.
go env GOOS GOARCH GOVERSION // Display multiple envs: Operating system name, arch, and Golang version
```

Set and echo

```bash
echo $GOOS $GOARCH

# Set custom os&arch, for building multi-platform executable for example.
export set GOOS=darwin GOARCH=arm64

# Restore preset
export set GOOS= GOARCH=

```

## Build

```golang
go help build // Show help docs for build command
go build
  -x // Print build process details
  --work // Keep temporary files, usually for diagnosing or testing.
```
