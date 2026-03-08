const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Main menu for Hamza-MD",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, reply }) => {
    try {
        let menuMsg = `*🚀 HAMZA-MD COMMANDS*

*Owner:* Hamza
*Status:* Online ⚡

.alive
.ping
.menu
.yt
.fb

*© 2026 HAMZA-MD*`;

        return await conn.sendMessage(from, { 
            image: { url: "https://files.catbox.moe/o63g7s.jpg" }, // Aapka Ninja Logo
            caption: menuMsg 
        }, { quoted: mek });

    } catch (e) {
        reply(`${e}`);
    }
});
