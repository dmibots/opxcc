import cl from 'lolcatjs';
import ch from 'chalk-animation';
import fg from 'figlet';
cl.options.seed = Math.round(Math.random() * 1000);
cl.options.colors = true;
// Jika anda tidak suka dengan template bawaan anda bisa memakai template anda sendiri
let garis = [
	'╔⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╗', 
	'╚⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝',
	'•❅───✧',  /*Kiri kanan*/ '✧───❅•'
]
let awalan = ['•≫', 'シ','જ','✾', '✼', '˚❀']
let teks = [
		'Command:',
		'Pesan:',
		'Oleh:',
		'Di Chat:',
		'Waktu:',
		'Di Private Chat',
		'', // INI JIKA DI ISI BAKAL MUNCUL NAMA KAMU
	] 
// READ TO CONSOLE
function _0x2bc1(_0x4d477e,_0x5a8849){const _0x138a17=_0x138a();return _0x2bc1=function(_0x2bc1bf,_0x3365b5){_0x2bc1bf=_0x2bc1bf-0x75;let _0x11ad99=_0x138a17[_0x2bc1bf];return _0x11ad99;},_0x2bc1(_0x4d477e,_0x5a8849);}(function(_0x37b974,_0x2e5fae){const _0xc53895=_0x2bc1,_0x1b7dba=_0x37b974();while(!![]){try{const _0x47bf7f=parseInt(_0xc53895(0x80))/0x1*(-parseInt(_0xc53895(0x7e))/0x2)+-parseInt(_0xc53895(0x8c))/0x3+parseInt(_0xc53895(0x75))/0x4+parseInt(_0xc53895(0x79))/0x5*(-parseInt(_0xc53895(0x7a))/0x6)+parseInt(_0xc53895(0x8b))/0x7*(parseInt(_0xc53895(0x7c))/0x8)+-parseInt(_0xc53895(0x8f))/0x9*(parseInt(_0xc53895(0x82))/0xa)+parseInt(_0xc53895(0x8d))/0xb*(parseInt(_0xc53895(0x85))/0xc);if(_0x47bf7f===_0x2e5fae)break;else _0x1b7dba['push'](_0x1b7dba['shift']());}catch(_0x5221b4){_0x1b7dba['push'](_0x1b7dba['shift']());}}}(_0x138a,0x58e7d));function _0x138a(){const _0x3f9dbe=['5252jRGSyr','preff','114unPWtw','\x20Tidak\x20diketahui','10BioZEM','mtype','messageStubType','11916ileUVd','\x20BOT\x20LAIN','sender','fromString','\x20Notification\x20Update\x20Group\x20','chat','4129027Giivpx','1449600xuGQcC','10835vPTXEe','fromMe','6013989TzChxj','1455632blIhnL','isBaileys','key','isGc','18860LscyNE','186FwcRJB','toDateString','8ZqupFO','rdm'];_0x138a=function(){return _0x3f9dbe;};return _0x138a();}export default async(_0x1ec8e7,{conn:_0x1af38f,q:_0x208e83,up:_0x2fffe3,budy:_0xefc3df})=>{const _0x1ae62a=_0x2bc1;let _0x559b60=_0x208e83[_0x1ae62a(0x7d)](awalan);if(_0x2fffe3[_0x1ae62a(0x77)][_0x1ae62a(0x8e)])return;if(!_0x1ec8e7[_0x1ae62a(0x76)]&&!_0x2fffe3[_0x1ae62a(0x84)])cl[_0x1ae62a(0x88)](_0xefc3df['startsWith'](_0x1ec8e7[_0x1ae62a(0x7f)])?_0x559b60+'\x20'+teks[0x0]+'\x20'+_0xefc3df:_0x559b60+'\x20'+teks[0x1]+'\x20'+(_0xefc3df||_0x1ec8e7[_0x1ae62a(0x83)])),cl[_0x1ae62a(0x88)](_0x559b60+'\x20'+teks[0x2]+'\x20'+_0x1ec8e7[_0x1ae62a(0x87)]['split']('@')[0x0]),cl[_0x1ae62a(0x88)](_0x1ec8e7[_0x1ae62a(0x78)]?_0x559b60+'\x20'+teks[0x3]+'\x20'+_0x1ec8e7[_0x1ae62a(0x8a)]:_0x559b60+'\x20'+teks[0x5]),cl['fromString'](_0x559b60+'\x20'+teks[0x4]+'\x20'+new Date()[_0x1ae62a(0x7b)]()+'\x0a');else{if(_0x1ec8e7[_0x1ae62a(0x76)]&&!_0x2fffe3[_0x1ae62a(0x84)])cl[_0x1ae62a(0x88)](_0x559b60+'\x20'+teks[0x1]+_0x1ae62a(0x81)),cl[_0x1ae62a(0x88)](_0x559b60+'\x20'+teks[0x2]+_0x1ae62a(0x86)),cl[_0x1ae62a(0x88)](_0x1ec8e7[_0x1ae62a(0x78)]?_0x559b60+'\x20'+teks[0x3]+'\x20'+_0x1ec8e7['chat']:_0x559b60+'\x20'+teks[0x5]),cl[_0x1ae62a(0x88)](_0x559b60+'\x20'+teks[0x4]+'\x20'+new Date()[_0x1ae62a(0x7b)]()+'\x0a');else!_0x1ec8e7[_0x1ae62a(0x76)]&&_0x2fffe3[_0x1ae62a(0x84)]&&(cl['fromString'](garis[0x0]),cl['fromString']('\x20\x20'+garis[0x2]+_0x1ae62a(0x89)+garis[0x3]),cl['fromString'](_0x1ec8e7[_0x1ae62a(0x78)]?_0x559b60+'\x20'+teks[0x3]+'\x20'+_0x1ec8e7[_0x1ae62a(0x8a)]:_0x559b60+'\x20'+teks[0x5]),cl[_0x1ae62a(0x88)](_0x559b60+'\x20'+teks[0x4]+'\x20'+new Date()[_0x1ae62a(0x7b)]()),cl[_0x1ae62a(0x88)](garis[0x1]));}};
export const _ = {
	connect: () => ch.rainbow('Menunggu tersambung ke koneksi server...'),
	cl: () => fg.textSync(teks[6].length <1 ? 'Ballbot' : teks[6], {font: 'Crawford',horizontalLayout: 'default',verticalLayout: 'default',width: 60,whitespaceBreak: true}),
}
// DATA DATA TIME STRING SESUAI DEVELOPER MOZILLA [ yang bagus dan yg gw seneng ]
// .toTimeString()
// .toLocalString()
// .toLocalTimeString()
// .toDateString()
// dll