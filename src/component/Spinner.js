export const Spinner = {
  show() {
    if (document.getElementById('spinner')) return;

    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.innerHTML = `
        <div class="spinner-overlay">
          <div class="loader"></div>
        </div>
      `;
    document.body.appendChild(spinner);
  },

  hide() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.remove();
    }
  },
};
