const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        details: {
            kernel: "6.15.4-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3/Rhino-Linux-2025.3-amd64.iso/download",
            downloadSize: "2.80 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "833321b761ab99b548be86e8c93a50b6e049b0821952ddd943a96060154cbbad"
        }
    },
    {
        title: "Generic ISO (ARM64)",
        details: {
            kernel: "6.15.4-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3/Rhino-Linux-2025.3-arm64.iso/download",
            downloadSize: "2.67 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "ca29ab457287236235123e218f2ddc1db1dc1302fcbd830ca106893ff0ed68a8"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinephone/Rhino-Linux-2025.3-pinephone-unified.img.xz/download",
            downloadSize: "2.19 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
            shasum: "4743bc4c97c1e10a45194df23b2f292aa881feae1c95eb807829119031c60815"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab.img.xz/download",
            downloadSize: "2.18 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "d04784896914de656eb787bbba57402460a56e556d7d46e878da2d643b769378"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-pinetab/Rhino-Linux-2025.3-pinetab2.img.xz/download",
            downloadSize: "2.17 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "22adec56bf7fb5c18610917b7ae17da7f71b7b409bbaf7d61f7ee573bf0c1075"
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
            kernel: "6.14.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-rpi/Rhino-Linux-2025.3-rpi-desktop.img.xz/download",
            downloadSize: "2.44 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "3bf52b16d980bb1bb24775adf72ea66cf670cd8d4fc7857ead10bb7264d0d6d3"
        }
    },
    {
        title: "Raspberry Pi Server (ARM64)",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.14.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.3-rpi/Rhino-Linux-2025.3-rpi-server.img.xz/download",
            downloadSize: "1.90 GiB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "d125060af7476498faea0fe8a11e8ee843f85706daf41e40c030440ecde13929"
        }
    }
];

export { genericContents, pineContents, rpiContents };
