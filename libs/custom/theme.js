(function () {
  'use strict';
  var root = document.documentElement;
  var theme = 'dark';
  try {
    var saved = localStorage.getItem('jeonghwan-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (error) { /* The toggle still works when storage is unavailable. */ }

  function applyTheme(value) {
    root.setAttribute('data-theme', value);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', value === 'light' ? '#f5f8fc' : '#0d1421');
  }
  // Restore the saved palette before the page is painted.
  applyTheme(theme);

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    function updateButton() {
      var isDark = root.getAttribute('data-theme') === 'dark';
      button.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
      button.querySelector('.theme-label').textContent = isDark ? 'Day mode' : 'Night mode';
      button.setAttribute('aria-label', isDark ? 'Switch to day mode' : 'Switch to night mode');
    }
    updateButton();
    button.hidden = false;
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      updateButton();
      try { localStorage.setItem('jeonghwan-theme', next); } catch (error) { /* Optional persistence. */ }
    });
  });
}());
