const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.3",
                kernel: "6.15.4-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3/Rhino-Linux-2025.3-amd64.iso/download",
                downloadSize: "2.80 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "6f30b9250ccc79b14e8a78c23ead099c6271975d8394698465dff70e3d7c8f96"
            }
        }
    },
    {
        title: "Generic ISO (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.3",
                kernel: "6.15.4-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3/Rhino-Linux-2025.3-arm64.iso/download",
                downloadSize: "2.67 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "966218c56c466e6a845c4777f15e9bc541a3fa40aa1ae63be9cc1cff55149220"
            }
        }
    }
];

const pineContents = [
    {
        title: "Pine64 PinePhone (OG/Pro)",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinephone/Rhino-Linux-2025.3-pinephone-unified.img.xz/download",
                downloadSize: "2.19 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "0ccda38f6455623df59e6c0a75ea5c64915afb0f7b361d5dcd89e482f0fe0254"
            },
            "Lomiri": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinephone/Rhino-Linux-2025.3-pinephone-unified.img.xz/download",
                downloadSize: "2.19 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "0ccda38f6455623df59e6c0a75ea5c64915afb0f7b361d5dcd89e482f0fe0254"
            }
        }
    },
    {
        title: "Pine64 PineTab",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab.img.xz/download",
                downloadSize: "2.18 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "3f4af108bf74af760d24243c91ec4f2ebfb7a1e0a446d395552ad730d69bf2c3"
            },
            "Lomiri": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab.img.xz/download",
                downloadSize: "2.18 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "3f4af108bf74af760d24243c91ec4f2ebfb7a1e0a446d395552ad730d69bf2c3"
            }
        }
    },
    {
        title: "Pine64 PineTab2",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab2.img.xz/download",
                downloadSize: "2.17 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "cbfd3225987b90c39f215eb803dfbc3bb633a3c1d6488195f30c7a91088a03bd"
            },
            "Lomiri": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab2.img.xz/download",
                downloadSize: "2.17 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "cbfd3225987b90c39f215eb803dfbc3bb633a3c1d6488195f30c7a91088a03bd"
            }
        }
    }
];

const rpiContents = [
    {
        title: "Raspberry Pi Desktop (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.14.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-rpi/Rhino-Linux-2025.3-rpi-desktop.img.xz/download",
                downloadSize: "2.44 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "f9251e4e0d8644c6a196e39f08bc15a5c25681891ba230546ffb385bbccb73ac"
            }
        }
    },
    {
        title: "Raspberry Pi Server (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.3",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.14.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-rpi/Rhino-Linux-2025.3-rpi-server.img.xz/download",
                downloadSize: "1.90 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "9f38b3202da204f1a330f0cee771efd7c5a503701ac42de2dfea997ca1adf52b"
            }
        }
    }
];

export { genericContents, pineContents, rpiContents };
