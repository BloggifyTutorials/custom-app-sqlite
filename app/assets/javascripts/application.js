const Actions = require("bloggify/actions")

// Handle submit
document.querySelector("#create-item").addEventListener("submit", async e => {
    e.preventDefault()

    // Create item
    const data = {
        content: document.querySelector("[name='content']").value
    }
    await Actions.post("items.create", data)

    // Append the last item
    const last = (await Actions.get("items.list")).pop()
    const $li = document.createElement("li")
    $li.textContent = last.content
    document.getElementById("items-list").appendChild($li)
})
