export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];
  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];

  const comunidades = [
    // Nina
    'https://chat.whatsapp.com/LeV1US5ilfJ8xftbXfeiqy', // CMD 100
    'https://chat.whatsapp.com/D35nCeQKRnY84op3WkSvEj', // CMD 101
    'https://chat.whatsapp.com/GRBtwpVjvLA6g22hjlzY5K', // CMD 102
    'https://chat.whatsapp.com/EoLhmmeiQpGAHQ1yU9CW7A', // CMD 104
    'https://chat.whatsapp.com/JhDM8UdeHQg8pxIm0ywl80', // CMD 105
    
    // Ventin
    'https://chat.whatsapp.com/KeJ1meRXOCDJduORhbFkc0', // 202
    'https://chat.whatsapp.com/GrjJ74h1p8Q1hp5dddudW4', // 205
    
    // Icaro
    'https://chat.whatsapp.com/G6ntVSdjHNWBDSol2p5vKX', // 801
    'https://chat.whatsapp.com/LfehR600yFV4SGmtZOCy2F', // 803
    
    // Daniel
    'https://chat.whatsapp.com/DtenhMMyN6yElF2vnMLUxk', // 701
    'https://chat.whatsapp.com/E3uhzD0U3jg9JipOWYV5Sw', // 702
    'https://chat.whatsapp.com/Krd0FzZ9GmH2Nq8K9BEfR7', // 703
    'https://chat.whatsapp.com/EAogaedZmUQ5X7C9uFh6V2', // 704
    
    // Wallace
    'https://chat.whatsapp.com/CUEMhLYwdAcHNMBYk2tn4a', // 530
    'https://chat.whatsapp.com/Gex3cCjjurBBGl1DFqaIGT', // 531
    
    // Jheo
    'https://chat.whatsapp.com/GKx7N9x0s49DZQc0Cp0Zyw', // 305
    'https://chat.whatsapp.com/FdNeYIbEirA69JCoHZ7J4E', // 307
    
    // Vinicius
    'https://chat.whatsapp.com/GsrZngyFuBa65d0QxJ6zcm', // 400
    'https://chat.whatsapp.com/F1mri3Y0KxMFX2JMwDbGco', // 401
    
    // Patrick
    'https://chat.whatsapp.com/Gpc5Tnrv35h414dHA36VFc', // 901
    'https://chat.whatsapp.com/I9Xkg1eB3756lJUXOFuSRx', // 902
    
    // Ediane
    'https://chat.whatsapp.com/BJRlMc9wPLBKyxXH3oFRnA', // 601
    'https://chat.whatsapp.com/Io0g9CvvuTP3hLEky15kUW'  // 602
  ];

  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));

  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }

  const destino = comunidades[Math.floor(Math.random() * comunidades.length)];
  res.writeHead(302, { Location: destino });
  res.end();
}
