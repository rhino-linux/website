const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.4",
                kernel: "6.18.1-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4/Rhino-Linux-2025.4-amd64.iso/download",
                downloadSize: "2.64 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "1b105945669d8e8efd2ea47309ab5412f1e1a0746a0c530e3cd267d3c49f91c5"
            }
        }
    },
    {
        title: "Generic ISO (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.4",
                kernel: "6.18.1-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4/Rhino-Linux-2025.4-arm64.iso/download",
                downloadSize: "2.63 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "36cb53b5e5a84edef66420322964ecaa695e44421384718fa8a1ff2a17401c08"
            }
        }
    }
];

const pineContents = [
    {
        title: "PINE64 PinePhone",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.12.62-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinephone/Rhino-Linux-2025.4-pinephone.img.xz/download",
                downloadSize: "2.06 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "3bf9549442a27042b569bd417e679fce36ad76b48616facba0430de2faa49dd8"
            },
            "Lomiri": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.12.62-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinephone/Rhino-Linux-2025.4-pinephone-lomiri.img.xz/download",
                downloadSize: "2.11 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone-lomiri",
                shasum: "a7c792f9b5106c9157183fc9e5fc6291ed6ce1d98351a37bbe61b9310bcc74de"
            }
        }
    },
    {
        title: "PINE64 PinePhone Pro",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.1-rockchip",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinephone/Rhino-Linux-2025.4-pinephonepro.img.xz/download",
                downloadSize: "2.07 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "67cec987bc98c26272e95f4a9afb0073c6fb6edf8541e5d8995c7754f5f6da75"
            },
            "Lomiri": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.1-rockchip",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinephone/Rhino-Linux-2025.4-pinephonepro-lomiri.img.xz/download",
                downloadSize: "2.12 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone-lomiri",
                shasum: "afbfe79e03eb540d6a7be2e391c9c844d1ee024236ad1ad63f8e0109e57ac8dc"
            }
        }
    },
    {
        title: "PINE64 PineTab",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.12.62-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinetab/Rhino-Linux-2025.4-pinetab.img.xz/download",
                downloadSize: "2.05 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "c9ee6542cdc4db0412ec5cf1f94a02e87674299284b02b1441dc12c7aecc15a5"
            },
            "Lomiri": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.12.62-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinetab/Rhino-Linux-2025.4-pinetab-lomiri.img.xz/download",
                downloadSize: "2.08 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab-lomiri",
                shasum: "1555861e3fc90e81147eae7bf645eac80393b35809119003c2f511af2f8f0450"
            }
        }
    },
    {
        title: "PINE64 PineTab2",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinetab/Rhino-Linux-2025.4-pinetab2.img.xz/download",
                downloadSize: "2.03 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "96995e78732965e7500fe62c832b4300d4264340618120e1dbaccd1524ea5f17"
            },
            "Lomiri": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-pinetab/Rhino-Linux-2025.4-pinetab2-lomiri.img.xz/download",
                downloadSize: "2.06 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab-lomiri",
                shasum: "bc5660dec818dbd8d17c4285607f4b2abe0b7fcf215274a1f4031604e5e04341"
            }
        }
    }
];

const rpiContents = [
    {
        title: "Raspberry Pi Desktop (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.17.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-rpi/Rhino-Linux-2025.4-rpi-desktop.img.xz/download",
                downloadSize: "2.35 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "57cd6b64614cc0b641ce6b74e0c4811f06f7b7b45564604c659c043174b5f21a"
            }
        }
    },
    {
        title: "Raspberry Pi Server (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2025.4",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.17.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.4-rpi/Rhino-Linux-2025.4-rpi-server.img.xz/download",
                downloadSize: "1.81 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "71f21b5df2036d3e667fdb38e5285a5ea7de6efe35fcd098aaee124a5a5684a1"
            }
        }
    }
];

export { genericContents, pineContents, rpiContents };
