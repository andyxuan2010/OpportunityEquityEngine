(() => {
  const toc = document.querySelector('[data-document-toc]');
  const article = document.querySelector('.document-content');
  const list = toc?.querySelector('[data-toc-list]');

  if (!toc || !article || !list) return;

  const headings = Array.from(article.querySelectorAll('h2, h3, h4'))
    .filter((heading) => !heading.closest('details'));

  if (!headings.length) {
    toc.hidden = true;
    return;
  }

  const usedIds = new Set();
  const slugify = (value) => value
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  headings.forEach((heading, index) => {
    let id = heading.id || slugify(heading.textContent) || `section-${index + 1}`;
    const baseId = id;
    let suffix = 2;

    while (usedIds.has(id)) id = `${baseId}-${suffix++}`;

    heading.id = id;
    usedIds.add(id);

    const link = document.createElement('a');
    link.className = `document-toc-link toc-level-${heading.tagName.toLowerCase()}`;
    link.href = `#${id}`;
    link.textContent = heading.textContent.trim();
    link.dataset.tocTarget = id;
    list.append(link);
  });

  const links = Array.from(list.querySelectorAll('.document-toc-link'));
  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.dataset.tocTarget === id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

    headings.forEach((heading) => observer.observe(heading));
  }

  links.forEach((link) => {
    link.addEventListener('click', () => setActive(link.dataset.tocTarget));
  });

  setActive(headings[0].id);
})();
