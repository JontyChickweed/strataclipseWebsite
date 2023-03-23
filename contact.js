document.getElementById("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const response = await fetch("<YOUR_AZURE_FUNCTION_URL>", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, message })
    });

    if (response.status === 200) {
        alert("Your message has been sent. Thank you!");
        document.getElementById("contact-form").reset();
    } else {
        alert("An error occurred. Please try again later.");
    }
});
