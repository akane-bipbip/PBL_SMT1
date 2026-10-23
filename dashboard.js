document.addEventListener('DOMContentLoaded', () => {
    const tugasList = Storage.getTugas();
    const jadwalList = Storage.getJadwal();

    const tugasBelumSelesai = tugasList.filter(t => t.status !== 'Selesai').length;
    
    const mendekatiDeadline = tugasList.filter(t => {
        const diff = Utils.getDaysDifference(t.deadline);
        return t.status !== 'Selesai' && diff >= 0 && diff <= 3;
    }).length;

    const hariIni = Utils.getTodayName();
    const jadwalHariIni = jadwalList.filter(j => j.hari === hariIni).length;

    document.getElementById('stat-belum-selesai').innerText = tugasBelumSelesai;
    document.getElementById('stat-mendekati-deadline').innerText = mendekatiDeadline;
    document.getElementById('stat-jadwal-hari-ini').innerText = jadwalHariIni;

    const nearDeadlineContainer = document.getElementById('list-dekat-deadline');
    const filteredTasks = tugasList
        .filter(t => t.status !== 'Selesai')
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 3);

    if (filteredTasks.length === 0) {
        nearDeadlineContainer.innerHTML = `<div class="list-item"><span>Tidak ada tugas mendekati deadline.</span></div>`;
    } else {
        nearDeadlineContainer.innerHTML = filteredTasks.map(t => {
            const daysLeft = Utils.getDaysDifference(t.deadline);
            return `
                <div class="list-item">
                    <span>Tugas ${t.mataKuliah}</span>
                    <span class="badge">${daysLeft >= 0 ? daysLeft + ' hari lagi' : 'Terlambat'}</span>
                </div>
            `;
        }).join('');
    }

    const todayScheduleContainer = document.getElementById('list-jadwal-hari-ini');
    const todaySchedules = jadwalList.filter(j => j.hari === hariIni);

    if (todaySchedules.length === 0) {
        todayScheduleContainer.innerHTML = `<div class="list-item"><span>Tidak ada jadwal kuliah hari ini.</span></div>`;
    } else {
        todayScheduleContainer.innerHTML = todaySchedules.map(j => `
            <div class="list-item">
                <span class="badge" style="background:#e2e8f0;">${j.waktu}</span>
                <span>${j.mataKuliah} (${j.dosen})</span>
            </div>
        `).join('');
    }
});