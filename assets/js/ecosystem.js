function appshide() {
    document.getElementById("ecosystem-main").style.display = "block";
    document.getElementById("ecosystem-wizard").style.display = "none";
    document.getElementById("ecosystem-system").style.display = "none";
    document.getElementById("ecosystem-rpk").style.display = "none";
}

function wizardshow() {
    document.getElementById("ecosystem-main").style.display = "none";
    document.getElementById("ecosystem-wizard").style.display = "block";
}

function systemshow() {
    document.getElementById("ecosystem-main").style.display = "none";
    document.getElementById("ecosystem-system").style.display = "block";
}

function rpkshow() {
    document.getElementById("ecosystem-main").style.display = "none";
    document.getElementById("ecosystem-rpk").style.display = "block";
}