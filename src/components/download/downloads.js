const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        details: {
            kernel: "6.9.1-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1/Rhino-Linux-2024.1-amd64.iso/download",
            downloadSize: "2.08 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "5653c5da7329438900793a8492377594d7d405b1786931142be7bb904453561e"
        }
    },
    {
        title: "Generic ISO (ARM64)",
        details: {
            kernel: "6.9.1-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1/Rhino-Linux-2024.1-arm64.iso/download",
            downloadSize: "2.05 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "040c2f8026215b1e1d24b41c98b5d1d42e4e07e0b57b81e2550f98efb41a4040"
        }
    }
];

const pineContents = [
    {
        title: "Pine64 PinePhone (OG/Pro)",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.9.0-okpine",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1-pinephone/Rhino-Linux-2024.1-pinephone-unified.img.xz/download",
            downloadSize: "1.61 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
            shasum: "cba573281f668f23086a53455d19fd285720829758e82b2c704c1122d9987f8b"
        }
    },
    {
        title: "Pine64 PineTab",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.9.0-okpine",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1-pinetab/Rhino-Linux-2024.1-pinetab.img.xz/download",
            downloadSize: "1.60 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "ef86ec05e6c7c68002592311f70b104a06603d5a9425f1a66e6abfaffc10a1c0"
        }
    },
    {
        title: "Pine64 PineTab2",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.9.0-okpine",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1-pinetab/Rhino-Linux-2024.1-pinetab2.img.xz/download",
            downloadSize: "1.60 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "e50d9f1bdcb798682545c1d82c40ec222005942dfeca0f32d5fb23a7110ec132"
        }
    }
];

const rpiContents = [
    {
        title: "Raspberry Pi Desktop (ARM64)",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.8.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1-rpi/Rhino-Linux-2024.1-rpi-desktop.img.xz/download",
            downloadSize: "1.82 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "7693084db10d9c747e568ee4f015da99cf14f10684669a8c6d6223b85d727843"
        }
    },
    {
        title: "Raspberry Pi Server (ARM64)",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.8.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.1-rpi/Rhino-Linux-2024.1-rpi-server.img.xz/download",
            downloadSize: "1.31 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "d053f3b5002d11ffd999e93ae901eadb3c639275cdc696df7d598934ac7e0dd3"
        }
    }
];

export { genericContents, pineContents, rpiContents };
