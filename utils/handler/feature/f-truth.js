import { truth } from '@bochilteam/scraper';

export const handle = async (m, { q, d, conn }) => {
	let res = await truth();
	let list = [['TRUTH', '.truth'],['DARE', '.dare']]
	let dd = d.f2('TRUTH? OR DARE?', 'https://telegra.ph/file/aefd7cd4e6cf77f9a7561.jpg', q.home)
	conn.butteks(m.chat, res, q.name, list, m, dd)
}