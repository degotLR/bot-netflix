const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    console.log('Escanea este código QR con tu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot de WhatsApp está listo!');
});

client.on('message', message => {
    const texto = message.body.toLowerCase();

    if (texto.includes('vender netflix') || texto.includes('netflix')) {
        message.reply('📢 ¡Hola! Si quieres vender Netflix, contáctanos 👉 https://wa.me/59112345678');
    }
});

client.initialize();
