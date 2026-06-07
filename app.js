// ═══════════════════════════════════════════════
// ADAPTIVE WORKPLACE OS — MAIN APP
// ═══════════════════════════════════════════════

const VIEWS = {
  dashboard:  { label: 'Dashboard',        render: renderDashboard },
  tasks:      { label: 'Task Engine',      render: renderTasks },
  meetings:   { label: 'Meetings',         render: renderMeetings },
  audit:      { label: 'GenAI Audit',      render: renderAudit },
  ideas:      { label: 'Innovation Bot',   render: renderIdeas },
  management: { label: 'Management',       render: renderManagement },
};

let currentView = 'dashboard';

const App = {
  init() {
    // Nav items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view) App.navigate(view);
      });
    });

    // Global search
    const search = document.getElementById('globalSearch');
    if (search) {
      search.addEventListener('keydown', e => {
        if (e.key === 'Enter' && search.value.trim()) {
          App.showToast(`🔍 Searching: "${search.value.trim()}"…`);
          search.value = '';
        }
      });
    }

    // Init bot
    Bot.init();

    // Render initial view
    App.navigate('dashboard');
  },

  navigate(viewName) {
    if (!VIEWS[viewName]) return;
    currentView = viewName;

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Update breadcrumb
    const bc = document.getElementById('breadcrumb');
    if (bc) bc.textContent = VIEWS[viewName].label;

    // Render view
    const container = document.getElementById('viewContainer');
    if (container) {
      container.innerHTML = VIEWS[viewName].render();
    }

    // Scroll to top
    if (container) container.scrollTop = 0;
  },

  showToast(msg) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
