(() => {
  const pickResult = selector => getHREFFromResult => (i) => {
    const results = document.querySelectorAll(selector);

    const result = results[i];

    const pointer = document.getElementById('result-pointer') || {
      remove: () => {},
    };

    pointer.remove();

    result.innerHTML = `
  <div
    id="result-pointer"
    style="position: absolute; margin-left: -15px;"
  >
    &gt;
  </div>
      ${result.innerHTML}`;

    document.onkeyup = ({ key }) => {
      switch (key) {
        case 'ArrowUp':
          pickResult(selector)(i > 0 ? i - 1 : 0);
          break;
        case 'ArrowDown':
          pickResult(selector)(i < results.length - 2 ? i + 1 : i);
          break;
        case 'Enter':
          window.open(getHREFFromResult(result), '_blank');
          break;
        default:
          break;
      }
    };
  };

  pickResult('LC20lb')(result => result.parentElement.href)(0);
})();
