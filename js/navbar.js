
    

    function ddshow() {
        const dropdown = document.getElementById("dropdown") || null
        if (!dropdown) return null
        dropdown.style.display = "block";
        dropdown.setAttribute("aria-expanded", true)
    
        
    }
    
    // Hide dropdown menu
    function ddhide() {
        const dropdown = document.getElementById("dropdown") || null
        if (!dropdown) return null
        dropdown.style.display = "none";
        dropdown.setAttribute("aria-expanded", false)
    }


