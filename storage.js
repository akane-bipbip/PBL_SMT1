const STORAGE_KEYS = {
    MATA_KULIAH: 'scholar_mata_kuliah',
    JADWAL: 'scholar_jadwal',
    TUGAS: 'scholar_tugas'
};

const initialData = {
    mataKuliah: [
        { kode: 'IF101', nama: 'Dasar Pemrograman', sks: 3 },
        { kode: 'IF102', nama: 'Proyek Perangkat Lunak', sks: 4 },
        { kode: 'IF103', nama: 'Pengantar Teknologi Informasi', sks: 3 },
        { kode: 'IF104', nama: 'Sistem Komputer', sks: 3 },
        { kode: 'IF105', nama: 'Pendidikan Pancasila', sks: 2 },
        { kode: 'IF106', nama: 'Matematika', sks: 2 }
    ],
    jadwal: [
        { id: 1, kode: 'IF101', mataKuliah: 'Dasar Pemrograman', dosen: 'Dr. Andi', hari: 'Senin', waktu: '08.00-10.00' },
        { id: 2, kode: 'IF102', mataKuliah: 'Proyek Perangkat Lunak', dosen: 'Dr. Budi', hari: 'Selasa', waktu: '10.15-12.15' },
        { id: 3, kode: 'IF103', mataKuliah: 'Pengantar Teknologi Informasi', dosen: 'Dr. Citra', hari: 'Rabu', waktu: '13.00-15.00' },
        { id: 4, kode: 'IF104', mataKuliah: 'Sistem Komputer', dosen: 'Prof. Dedi', hari: 'Kamis', waktu: '08.00-10.00' },
        { id: 5, kode: 'IF105', mataKuliah: 'Pendidikan Pancasila', dosen: 'Dr. Siti', hari: 'Jumat', waktu: '10.15-12.15' }
    ],
    tugas: [
        { id: 1, mataKuliah: 'Dasar Pemrograman', tglDiberikan: '2026-10-23', deadline: '2026-10-25', prioritas: 'Tinggi', status: 'Dikerjakan' },
        { id: 2, mataKuliah: 'Proyek Perangkat Lunak', tglDiberikan: '2026-10-23', deadline: '2026-10-26', prioritas: 'Tinggi', status: 'Belum Mulai' },
        { id: 3, mataKuliah: 'Pengantar Teknologi Informasi', tglDiberikan: '2026-10-24', deadline: '2026-10-27', prioritas: 'Sedang', status: 'Dikerjakan' },
        { id: 4, mataKuliah: 'Matematika', tglDiberikan: '2026-10-25', deadline: '2026-10-28', prioritas: 'Rendah', status: 'Selesai' }
    ]
};

function getStorage(key, defaultData) {
    try {
        const data = localStorage.getItem(key);
        if (!data) {
            localStorage.setItem(key, JSON.stringify(defaultData));
            return defaultData;
        }
        return JSON.parse(data);
    } catch (e) {
        console.error("Gagal membaca localStorage:", e);
        return defaultData;
    }
}

function setStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Gagal menyimpan ke localStorage:", e);
    }
}

window.Storage = {
    getMataKuliah: () => getStorage(STORAGE_KEYS.MATA_KULIAH, initialData.mataKuliah),
    setMataKuliah: (data) => setStorage(STORAGE_KEYS.MATA_KULIAH, data),
    getJadwal: () => getStorage(STORAGE_KEYS.JADWAL, initialData.jadwal),
    setJadwal: (data) => setStorage(STORAGE_KEYS.JADWAL, data),
    getTugas: () => getStorage(STORAGE_KEYS.TUGAS, initialData.tugas),
    setTugas: (data) => setStorage(STORAGE_KEYS.TUGAS, data)
};