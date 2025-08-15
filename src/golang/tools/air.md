# Air

Keeps Golang project up-and-running with hot-loading.

- [Official Site](https://github.com/air-verse/air)
- [Github](https://github.com/air-verse/air)

## Usage

First, download and initiate Air package:

```bash
go install github.com/air-verse/air@latest
air init
```

Make neccesary changes to the generated configuration file _.air.toml_ with your needs, then run air with:

```bash
air
```

## Windows/Cross-OS handling

To co-work with Windows operating systems, the simplest approach is to use a specific configuration file duplicated from .air.toml with minor amendments to handle path differences.

```bash
cp .air.toml .air.windows.toml
```

Change executable file path and build command configs under _build_ group from Linux/macOS style to Windows, for example from:

```toml
[build]
  bin = "tmp/main"
  cmd = "go build -o ./tmp/main ./src"
```

To:

```toml
[build]
  bin = "tmp\\main.exe"
  cmd = "go build -o ./tmp/main.exe ./src"
```

Now you could get _air_ work with specified config file for Windows OS, while the Linux/macOS work spaces remains working.

```bash
air -c .air.windows.toml
```

## References

- [Fiber: Live Reloading with Air Example](https://docs.gofiber.io/recipes/air/)
