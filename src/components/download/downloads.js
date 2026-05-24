const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        desktop_environments: {
            "Unicorn": {
                version: "2026.1",
                kernel: "7.0.9-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1/Rhino-Linux-2026.1-amd64.iso/download",
                downloadSize: "2.70 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "787e6db05b531c2a7027617918076630c8ed4c74ff2ab19c3cc2e919115e5279"
            },
            "Lomiri": {
                version: "2026.1",
                kernel: "7.0.9-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1/Rhino-Linux-2026.1-amd64-lomiri.iso/download",
                downloadSize: "2.59 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main-lomiri",
                shasum: "9a11dce01fe5b47ca4b7fa14af9fdb1a673573515a94e20c3048e921c220d63c"
            }
        }
    },
    {
        title: "Generic ISO (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2026.1",
                kernel: "7.0.9-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1/Rhino-Linux-2026.1-arm64.iso/download",
                downloadSize: "2.69 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main",
                shasum: "bfd363b7557d2e33ecdcae3bf43cee364700eb4ffeec871dd74d6092c1fa391b"
            },
            "Lomiri": {
                version: "2026.1",
                kernel: "7.0.9-generic",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1/Rhino-Linux-2026.1-arm64-lomiri.iso/download",
                downloadSize: "2.58 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/main-lomiri",
                shasum: "f49cc22ad9291c66d599cf91b333fb983f48dca713c0a591509adb431e3bc36e"
            }
        }
    }
];

const pineContents = [
    {
        title: "PINE64 PinePhone",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinephone/Rhino-Linux-2026.1-pinephone.img.xz/download",
                downloadSize: "2.15 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "9774cb4ca7900b34caca74e1b6928ea7a8e31b5e8338d302abe015dbe05f2de0"
            },
            "Lomiri": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinephone/Rhino-Linux-2026.1-pinephone-lomiri.img.xz/download",
                downloadSize: "2.13 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone-lomiri",
                shasum: "cdcde9dd9395fb52d722d1316d6135fa150ef6f5f65e71ee37e6b89374e9e732"
            }
        }
    },
    {
        title: "PINE64 PinePhone Pro",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-rockchip",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinephone/Rhino-Linux-2026.1-pinephonepro.img.xz/download",
                downloadSize: "2.08 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
                shasum: "296e8627692225b0f00c6871f51a7e649c4413c8864ff0d56a56a83df82abb14"
            },
            "Lomiri": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-rockchip",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinephone/Rhino-Linux-2026.1-pinephonepro-lomiri.img.xz/download",
                downloadSize: "2.07 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinephone-lomiri",
                shasum: "2621c33d25d2826f3f49c2d1e809d774a739bd0e32fabfa67869c7f7ffb80778"
            }
        }
    },
    {
        title: "PINE64 PineTab",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinetab/Rhino-Linux-2026.1-pinetab.img.xz/download",
                downloadSize: "2.14 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "eb04138e9944fe9f88384bd904964ca0470e1cea3d8f0f44290d553e2823bc73"
            },
            "Lomiri": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.18.32-sunxi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinetab/Rhino-Linux-2026.1-pinetab-lomiri.img.xz/download",
                downloadSize: "2.10 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab-lomiri",
                shasum: "4dc8ef74259279fa5808db24d4f3392f683e64e19b5502823e236c8bc59bc509"
            }
        }
    },
    {
        title: "PINE64 PineTab2",
        desktop_environments: {
            "Unicorn Mobile": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinetab/Rhino-Linux-2026.1-pinetab2.img.xz/download",
                downloadSize: "2.04 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
                shasum: "b76236bc294d92d9838360633e91d2e769f954044eaf82a43297bef5c63078ee"
            },
            "Lomiri": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "6.9.0-okpine",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-pinetab/Rhino-Linux-2026.1-pinetab2-lomiri.img.xz/download",
                downloadSize: "2.00 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/pinetab-lomiri",
                shasum: "e755a7821f563b47e06ef096b8e01fc4f75d8adbf2449ba948106bf4128e23ea"
            }
        }
    }
];

const rpiContents = [
    {
        title: "Raspberry Pi (ARM64)",
        desktop_environments: {
            "Unicorn": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "7.0.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-rpi/Rhino-Linux-2026.1-rpi-desktop.img.xz/download",
                downloadSize: "2.40 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "cf702d9266f02ba259b204e8ed6edade83920b8ba09ab898a4702dc25793241f"
            },
            "Server": {
                version: "2026.1",
                login: {
                    username: "rhino",
                    password: "1234"
                },
                kernel: "7.0.0-raspi",
                downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2026.1-rpi/Rhino-Linux-2026.1-rpi-server.img.xz/download",
                downloadSize: "1.88 GiB",
                sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
                shasum: "c7f9e23959e61e693a66a296d045ff95f231bd3c1540d41922cfd10de2d206b7"
            }
        }
    }
];

export { genericContents, pineContents, rpiContents };
