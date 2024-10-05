const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        details: {
            kernel: "6.10.7-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2/Rhino-Linux-2024.2-amd64.iso/download",
            downloadSize: "2.19 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "41887036a38b47bb6a391e24cf7200388fa4bbadca7f4ede6932cb0d0d93317b"
        }
    },
    {
        title: "Generic ISO (ARM64)",
        details: {
            kernel: "6.10.7-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2/Rhino-Linux-2024.2-arm64.iso/download",
            downloadSize: "2.12 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "c63643ee849e529349897f4dc8afe31e6d403e81dfee6cb80002ae85accbee3d"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2-pinephone/Rhino-Linux-2024.2-pinephone-unified.img.xz/download",
            downloadSize: "1.63 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
            shasum: "86e1bb03e85a2c8e3b6e7f0998e699df01dd9edb74fb8c407aa9a0534c96675c"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2-pinetab/Rhino-Linux-2024.2-pinetab.img.xz/download",
            downloadSize: "1.62 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "a67809015ece9e50b725898da6752974fe977730fc939db4d5996e42a78424d4"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2-pinetab/Rhino-Linux-2024.2-pinetab2.img.xz/download",
            downloadSize: "1.62 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "ba92a72235ab2ae66316b28618cbdd5bbdf8f2d2e1d49eb1a2597882a576c24b"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2-rpi/Rhino-Linux-2024.2-rpi-desktop.img.xz/download",
            downloadSize: "1.86 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "3b7766aa02f3bcde284c36f621736d6549b0e348960efbe486c987355adceb91"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2024.2-rpi/Rhino-Linux-2024.2-rpi-server.img.xz/download",
            downloadSize: "1.34 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "6e11b3858a439ce5ef8d02629509e6aec84b1da27e0a52976b4cc1085710ce1a"
        }
    }
];

export { genericContents, pineContents, rpiContents };
