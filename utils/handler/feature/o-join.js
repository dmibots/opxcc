
export const handle = async (m, { q, conn }) => {
	try {
		if (!m.isOwn) throw q.owner
		if (!m.args[0]) throw q.aslink
		if (!q.url(m.args[0])) throw q.flink
		let code = m.args[0].split('whatsapp.com/')[1];
		await conn.groupAcceptInvite(code)
		.then(v => q.sukses).catch(e=> q.gagal);
	} catch (e) { conn.sendteks(m.chat, e, m) }
}