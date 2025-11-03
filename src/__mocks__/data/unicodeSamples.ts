// Constants shared across tests to avoid duplication and ensure DRY principle

export const unicodeText = `Me sem ea vero!
A mazim donec si est perpetuum iucunda moreae — eius regressu, hac se regnandum, eum orci'e facer nunc si conjuso wisi id est pungit:

• Futurum mutuum EOS servire, est avocare arcu ante in eget caescs et est M maneant natus d anteriori nisi

• Quod dignissim, ad vicissitudo noverca sit proditorem regulam nibh sem mppono wisi M Servata in falli dui harum id qui substitam modi, irritari qui consulta'a quisque non concilia pugnat, cum poenam ea quos renovo reducere`;

export const textWithEmDash = 'Test — em dash';
export const textWithApostrophe = "We're back";
export const textWithBullet = '• First item';
export const chineseText = '姓名';
export const emojiText = 'test transaction 🙀';
export const ascii =
  '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
export const nonAsciiSample =
  '🙀!"#$%&\\() * +, -./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~������';
export const atSeparatedString = 'short';
export const tokenDataSample = 'token1'; // for token decode test
export const esdtPayload =
  'ESDTNFTTransfer@524f424f54532d316365303334@01@01@0000000000000000050006bdc61ebbec719b07b4a7ebfd1fb215c0706e3c7ceb';

export const unicodeParts = [
  'We are so back!',
  "A short recap — what's being done",
  '• Despite having 2FA'
];

// Invisible Unicode characters from https://invisible-characters.com/
export const textWithHangulFiller = '\u3164'; // U+3164 HANGUL FILLER - commonly used for invisible names
export const textWithZeroWidthSpace = 'test\u200Btext'; // U+200B ZERO WIDTH SPACE - can be used for empty messages
