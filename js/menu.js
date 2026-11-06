// ハンバーガーメニュー
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.getElementById('menu-list');

function setMenuOpen(open) {
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  menuList.hidden = !open;
}

menuBtn.addEventListener('click', () => setMenuOpen(menuList.hidden));
menuList.addEventListener('click', (e) => { if (e.target.closest('a')) setMenuOpen(false); });
document.addEventListener('click', (e) => { if (!e.target.closest('.menu')) setMenuOpen(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menuList.hidden) { setMenuOpen(false); menuBtn.focus(); }
});
