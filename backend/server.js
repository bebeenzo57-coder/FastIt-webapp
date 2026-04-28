import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ STOCK EN MÉMOIRE (simple demo)
let orders = [];

// ───── CREATE ORDER ─────
app.post("/orders", async (req, res) => {
  const { name, address, whatsapp, items, total, paymentMethod } = req.body;

  const orderId = "FST-" + Date.now();

  const order = {
    id: orderId,
    name,
    address,
    whatsapp,
    items,
    total,
    paymentMethod,
    status: "Processing"
  };

  orders.push(order);

  // 🔥 TELEGRAM MESSAGE
  const message = `
🚨 NEW ORDER

🆔 ${orderId}
👤 ${name}
📞 ${whatsapp}
📍 ${address}

🛒 Items:
${items.map(i => `- ${i.name} x${i.qty}`).join("\n")}

💰 Total: ${total}
💳 Payment: ${paymentMethod}
`;

  await fetch(`https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "YOUR_CHAT_ID",
      text: message
    })
  });

  res.json({ success: true, orderId });
});

// ───── TRACK ORDER ─────
app.get("/orders/:id", (req, res) => {
  const order = orders.find(o => o.id === req.params.id);

  if (!order) {
    return res.json({ error: "Order not found" });
  }

  res.json(order);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
