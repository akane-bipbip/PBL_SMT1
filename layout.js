(function() {
    function initLayout() {
        const pathSegments = window.location.pathname.split('/');
        const activePage = pathSegments[pathSegments.length - 1] || 'dashboard.html';

        if (!document.querySelector('.sidebar')) {
            const sidebarHTML = `
                <aside class="sidebar">
                    <div class="brand">
                        <div class="logo-icon">🎓</div>
                        <h2>Scholar Planner</h2>
                    </div>
                    <nav class="nav-menu">
                        <a href="dashboard.html" class="nav-link ${activePage === 'dashboard.html' ? 'active' : ''}">Dashboard</a>
                        <a href="mata-kuliah.html" class="nav-link ${activePage === 'mata-kuliah.html' ? 'active' : ''}">Mata Kuliah</a>
                        <a href="tugas.html" class="nav-link ${activePage === 'tugas.html' ? 'active' : ''}">Tugas Mahasiswa</a>
                        <a href="jadwal.html" class="nav-link ${activePage === 'jadwal.html' ? 'active' : ''}">Jadwal Belajar</a>
                        <a href="rekap.html" class="nav-link ${activePage === 'rekap.html' ? 'active' : ''}">Rekap</a>
                    </nav>
                </aside>
            `;
            document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLayout);
    } else {
        initLayout();
    }
})();