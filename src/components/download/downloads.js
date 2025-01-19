const genericContents = [
    {
        title: "Generic ISO (x86_64)",
        details: {
            kernel: "6.12.3-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1/Rhino-Linux-2025.1-amd64.iso/download",
            downloadSize: "2.59 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "a2a3719490a12ae55c54e2b898f979c01c838f28d13969b15eb3971623ebadb0"
        }
    },
    {
        title: "Generic ISO (ARM64)",
        details: {
            kernel: "6.12.3-generic",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1/Rhino-Linux-2025.1-arm64.iso/download",
            downloadSize: "2.43 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/main",
            shasum: "dba8ca8531429ae01e429d97793d17030c185d38710218bb0b9b2823ed8852e6"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1-pinephone/Rhino-Linux-2025.1-pinephone-unified.img.xz/download",
            downloadSize: "1.95 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinephone",
            shasum: "a61429104a814822178d7f4930062243d97859b6bbf26b8b58c97a859ebda53b"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1-pinetab/Rhino-Linux-2025.1-pinetab.img.xz/download",
            downloadSize: "1.94 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "dc4abf4d7fe97c893f092756b9692db732eee692dac2ed880ed4522f2fa0830d"
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
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1-pinetab/Rhino-Linux-2025.1-pinetab2.img.xz/download",
            downloadSize: "1.94 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/pinetab",
            shasum: "0cf926e62f0c9073869b395a676bc786cd54cf10804cf803516e473270611d0d"
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
            kernel: "6.11.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1-rpi/Rhino-Linux-2025.1-rpi-desktop.img.xz/download",
            downloadSize: "2.19 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "5cf9899da5e7d240a91f0b37be52d16a28d65998dfa142c02a57e5d4ceb46580"
        }
    },
    {
        title: "Raspberry Pi Server (ARM64)",
        details: {
            login: {
                username: "rhino",
                password: "1234"
            },
            kernel: "6.11.0-raspi",
            downloadMirror: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1-rpi/Rhino-Linux-2025.1-rpi-server.img.xz/download",
            downloadSize: "1.64 GB",
            sourceCode: "https://github.com/rhino-linux/os/tree/rpi",
            shasum: "10d2c32dd8d31e970b70250ce04878c0c4411fff47d6e0c1434915cbf963663d"
        }
    }
];

export { genericContents, pineContents, rpiContents };
