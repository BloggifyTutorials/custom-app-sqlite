import { post, get } from "bloggify/lib/client/actions.js"
import "./application.css";


// Handle submit
document.querySelector("#create-item").addEventListener("submit", async e => {
    e.preventDefault()

    // Create item
    const data = {
        content: document.querySelector("[name='content']").value
    }

    await post("items.create", data)

    // Append the last item
    const { items } = (await get("items.list"))
    const last = (items || []).pop();
    const $li = document.createElement("li")
    $li.textContent = last.content
    document.getElementById("items-list").appendChild($li)
})
